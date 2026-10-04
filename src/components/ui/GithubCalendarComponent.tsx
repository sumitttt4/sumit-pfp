"use client";

import { cloneElement, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function GithubCalendarComponent() {
  const { resolvedTheme } = useTheme();
  const [attempt, setAttempt] = useState(0);
  return (
    <section className="section github-section">
      <div className="section-heading">
        <h2>A little, every day</h2>
        <a href={profile.github} className="text-link" target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <div className="github-scroll" tabIndex={0} role="region" aria-label="GitHub contributions in the past year. Scroll horizontally to see all months.">
        <GitHubCalendar
          key={attempt}
          username="sumitttt4"
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          theme={{ light: ["var(--calendar-0)", "var(--calendar-1)", "var(--calendar-2)", "var(--calendar-3)", "var(--calendar-4)"], dark: ["var(--calendar-0)", "var(--calendar-1)", "var(--calendar-2)", "var(--calendar-3)", "var(--calendar-4)"] }}
          blockSize={8}
          blockMargin={3}
          blockRadius={2}
          fontSize={11}
          errorMessage="GitHub activity couldn’t load. You can retry or view it on GitHub."
          renderBlock={(block, activity) => cloneElement(block, {}, (
            <title>{`${activity.count} contribution${activity.count === 1 ? "" : "s"} on ${activity.date}`}</title>
          ))}
          style={{ color: "hsl(var(--muted-foreground))" }}
        />
      </div>
      <button type="button" className="text-link github-retry" onClick={() => setAttempt((value) => value + 1)}>Refresh activity</button>
    </section>
  );
}
