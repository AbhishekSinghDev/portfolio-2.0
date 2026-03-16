"use client";

import { useEffect, useRef, useState } from "react";
import Title from "./Title";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionWeek {
  days: ContributionDay[];
}

const GITHUB_USERNAME = "AbhishekSinghDev";

// Cell size + gap
const CELL = 12;
const GAP = 3;
const STEP = CELL + GAP;

const GitHubContributions = () => {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        const contributionsArray: ContributionDay[] = data.contributions;
        const total = data.total?.lastYear ?? data.total?.last ?? 0;

        const weeksData: ContributionWeek[] = [];
        let currentWeek: ContributionWeek = { days: [] };

        for (const entry of contributionsArray) {
          const dayOfWeek = new Date(entry.date + "T00:00:00").getDay();
          if (dayOfWeek === 0 && currentWeek.days.length > 0) {
            weeksData.push(currentWeek);
            currentWeek = { days: [] };
          }
          currentWeek.days.push(entry);
        }
        if (currentWeek.days.length > 0) weeksData.push(currentWeek);

        setWeeks(weeksData);
        setTotalContributions(total);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  // Scroll to the right (most recent weeks) on mobile after data loads
  useEffect(() => {
    if (weeks.length > 0 && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [weeks]);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-[hsl(0,0%,14%)]";
      case 1:
        return "bg-[#0e4429]";
      case 2:
        return "bg-[#006d32]";
      case 3:
        return "bg-[#26a641]";
      case 4:
        return "bg-[#39d353]";
      default:
        return "bg-[hsl(0,0%,14%)]";
    }
  };

  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const monthLabels = (() => {
    if (weeks.length === 0) return [];
    const labels: { text: string; index: number }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, i) => {
      const firstDay = week.days[0];
      if (!firstDay) return;
      const month = parseInt(firstDay.date.split("-")[1], 10) - 1;
      if (month !== lastMonth) {
        labels.push({ text: MONTHS[month], index: i });
        lastMonth = month;
      }
    });
    return labels;
  })();

  if (error) return null;

  return (
    <div className="py-10 px-5 sm:px-0">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-6">
        <Title text="GitHub" />
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          @{GITHUB_USERNAME}
        </a>
      </div>

      {loading ? (
        <div className="h-36 animate-pulse bg-secondary rounded-lg" />
      ) : (
        <div className="border border-border rounded-lg bg-card">
          {/* Stats row */}
          <div className="px-4 pt-4 pb-3 border-b border-border flex items-center gap-1.5">
            <span className="text-sm font-medium text-foreground">
              {totalContributions.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">
              contributions in the last year
            </span>
          </div>

          {/* Graph */}
          <div
            ref={scrollRef}
            className="overflow-x-auto p-4 scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="inline-flex flex-col" style={{ minWidth: "max-content" }}>
              {/* Month labels */}
              <div
                className="flex mb-1"
                style={{ paddingLeft: `${STEP + 4}px` }}
              >
                {monthLabels.map((label, i) => {
                  const nextIndex =
                    i < monthLabels.length - 1
                      ? monthLabels[i + 1].index
                      : weeks.length;
                  const spanPx = (nextIndex - label.index) * STEP;
                  return (
                    <div
                      key={i}
                      className="text-[10px] text-muted-foreground/70 overflow-hidden"
                      style={{ width: `${spanPx}px` }}
                    >
                      {label.text}
                    </div>
                  );
                })}
              </div>

              {/* Day labels + grid */}
              <div className="flex gap-1">
                {/* Day labels */}
                <div
                  className="flex flex-col shrink-0"
                  style={{ gap: `${GAP}px` }}
                >
                  {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d, i) => (
                    <div
                      key={d}
                      className="text-[10px] text-muted-foreground/70 leading-none flex items-center"
                      style={{
                        height: `${CELL}px`,
                        // only show Mon, Wed, Fri to match GitHub style
                        visibility: i === 1 || i === 3 || i === 5 ? "visible" : "hidden",
                      }}
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {/* Weeks */}
                <div className="flex" style={{ gap: `${GAP}px` }}>
                  {weeks.map((week, wi) => (
                    <div
                      key={wi}
                      className="flex flex-col"
                      style={{ gap: `${GAP}px` }}
                    >
                      {week.days.map((day, di) => (
                        <div
                          key={di}
                          className={`rounded-sm ${getLevelColor(day.level)} transition-opacity hover:opacity-80`}
                          style={{ width: CELL, height: CELL }}
                          title={`${day.count} contribution${day.count !== 1 ? "s" : ""} · ${day.date}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-[3px] mt-3">
                <span className="text-[10px] text-muted-foreground/60 mr-1.5">Less</span>
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`rounded-sm ${getLevelColor(level)}`}
                    style={{ width: CELL, height: CELL }}
                  />
                ))}
                <span className="text-[10px] text-muted-foreground/60 ml-1.5">More</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubContributions;
