"use client";

import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { PERSONAL_PROJECTS } from "../constants/projects";

const PROJECT_SUMMARIES: Record<string, string> = {
  "Youth AF":
    "A learning platform that turns classes, notes, PYQs, paid resources, and profiles into one fast student workflow.",
  CeroCode:
    "A production CLI for streaming LLM conversations, web search, code execution, secure device auth, and persistent history.",
  "Lunox.ai":
    "A web-search workspace that combines Brave results with Gemini summaries and keeps research threads organized.",
  "Pencil.io":
    "A collaborative document and diagram workspace with real-time synchronization and paid access.",
  "Event Ocean":
    "An event marketplace covering discovery, ticket booking, payment processing, and organizer workflows.",
  PromptHub:
    "A community product for discovering, publishing, and rating useful AI prompts across models and tasks.",
};

function normalizeCover(cover: string) {
  return cover.startsWith("/") ? cover : `/${cover}`;
}

export default function ProjectSwitchboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PERSONAL_PROJECTS[activeIndex];

  return (
    <div className="switchboard">
      <div className="project-routes" aria-label="Project index">
        {PERSONAL_PROJECTS.map((project, index) => {
          const active = activeIndex === index;

          return (
            <button
              type="button"
              className="project-route"
              data-active={active}
              aria-pressed={active}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              key={project.title}
            >
              <span className="route-signal" aria-hidden="true" />
              <span className="route-copy">
                <strong>{project.title}</strong>
                <small>{project.subtitle}</small>
              </span>
              <IconArrowUpRight aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <div className="project-output">
        <div className="project-screen">
          <div className="screen-toolbar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>{activeProject.link.replace(/^https?:\/\//, "")}</p>
          </div>
          <div className="screen-image">
            <Image
              key={activeProject.title}
              src={normalizeCover(activeProject.cover)}
              alt={`${activeProject.title} product interface`}
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
              className="project-screen-image"
            />
          </div>
        </div>

        <div className="project-readout">
          <div>
            <p>{activeProject.tags.join(" · ")}</p>
            <h3>{activeProject.title}</h3>
          </div>
          <div className="readout-detail">
            <p>
              {PROJECT_SUMMARIES[activeProject.title] ??
                activeProject.description}
            </p>
            <div className="readout-footer">
              <span>
                {activeProject.tech
                  .slice(0, 4)
                  .map((item) => item.name)
                  .join(" / ")}
              </span>
              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${activeProject.title}`}
              >
                Open project
                <IconArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
