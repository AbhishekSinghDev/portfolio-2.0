"use client";

import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionWeek {
  days: ContributionDay[];
}

const GITHUB_USERNAME = "AbhishekSinghDev";
const CELL = 10;
const GAP = 3;
const STEP = CELL + GAP;
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function GitHubContributions() {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchContributions() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
          { signal: controller.signal },
        );

        if (!response.ok) throw new Error("Contribution request failed");

        const data = await response.json();
        const contributions: ContributionDay[] = data.contributions ?? [];
        const nextWeeks: ContributionWeek[] = [];
        let currentWeek: ContributionWeek = { days: [] };

        for (const entry of contributions) {
          const dayOfWeek = new Date(`${entry.date}T00:00:00`).getDay();

          if (dayOfWeek === 0 && currentWeek.days.length > 0) {
            nextWeeks.push(currentWeek);
            currentWeek = { days: [] };
          }

          currentWeek.days.push(entry);
        }

        if (currentWeek.days.length > 0) nextWeeks.push(currentWeek);

        setWeeks(nextWeeks);
        setTotalContributions(data.total?.lastYear ?? data.total?.last ?? 0);
        setStatus("ready");
      } catch (error) {
        if ((error as Error).name !== "AbortError") setStatus("error");
      }
    }

    fetchContributions();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (status === "ready" && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [status]);

  const monthLabels = (() => {
    const labels: { text: string; index: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, index) => {
      const firstDay = week.days[0];
      if (!firstDay) return;

      const month = Number(firstDay.date.split("-")[1]) - 1;
      if (month !== lastMonth) {
        labels.push({ text: MONTHS[month], index });
        lastMonth = month;
      }
    });

    return labels;
  })();

  return (
    <section className="github-zone" aria-labelledby="github-title">
      <div className="frame github-layout">
        <div className="github-intro">
          <IconBrandGithub aria-hidden="true" />
          <div>
            <h2 id="github-title">Open work, visible.</h2>
            <p>
              Shipping is a habit. This is the public part of the work, not the
              whole story.
            </p>
          </div>
        </div>

        <div className="contribution-panel">
          <div className="contribution-heading">
            <p>
              {status === "ready" ? (
                <>
                  <strong>{totalContributions.toLocaleString()}</strong>{" "}
                  contributions in the last year
                </>
              ) : status === "loading" ? (
                "Loading the latest contribution signal…"
              ) : (
                "The live contribution signal is unavailable."
              )}
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
            >
              @{GITHUB_USERNAME}
              <IconArrowUpRight aria-hidden="true" />
            </a>
          </div>

          {status === "loading" && (
            <div className="contribution-loading" aria-hidden="true">
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
          )}

          {status === "error" && (
            <p className="contribution-error">
              Visit GitHub to see the latest activity and repositories.
            </p>
          )}

          {status === "ready" && (
            <div
              className="contribution-scroll"
              ref={scrollRef}
              role="img"
              aria-label={`${totalContributions.toLocaleString()} GitHub contributions in the last year`}
            >
              <div className="contribution-graph">
                <div
                  className="month-row"
                  style={{ paddingLeft: `${STEP + 24}px` }}
                  aria-hidden="true"
                >
                  {monthLabels.map((label, index) => {
                    const nextIndex =
                      monthLabels[index + 1]?.index ?? weeks.length;

                    return (
                      <span
                        key={`${label.text}-${label.index}`}
                        style={{ width: `${(nextIndex - label.index) * STEP}px` }}
                      >
                        {label.text}
                      </span>
                    );
                  })}
                </div>

                <div className="graph-body" aria-hidden="true">
                  <div className="day-labels">
                    {["", "Mon", "", "Wed", "", "Fri", ""].map(
                      (day, index) => (
                        <span key={`${day}-${index}`}>{day}</span>
                      ),
                    )}
                  </div>

                  <div className="week-row">
                    {weeks.map((week, weekIndex) => (
                      <div className="contribution-week" key={weekIndex}>
                        {week.days.map((day) => (
                          <span
                            className="contribution-cell"
                            data-level={day.level}
                            key={day.date}
                            title={`${day.count} contribution${
                              day.count === 1 ? "" : "s"
                            } on ${day.date}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
