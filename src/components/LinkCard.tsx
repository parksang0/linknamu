"use client";

import type { LinkItem } from "@/types/link";

export default function LinkCard({ id, title, url }: LinkItem) {
  const handleClick = () => {
    fetch(`/api/links/${id}/click`, { method: "POST" }).catch(() => {});
  };

  const spaceIndex = title.indexOf(" ");
  const icon = spaceIndex === -1 ? null : title.slice(0, spaceIndex);
  const label = spaceIndex === -1 ? title : title.slice(spaceIndex + 1);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center gap-3 rounded-2xl border border-white/50 bg-white/40 px-5 py-4 text-sm font-medium text-zinc-900 shadow-sm backdrop-blur-md transition-colors duration-200 hover:border-white/70 hover:bg-white/55 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50 dark:hover:bg-white/10"
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{label}</span>
    </a>
  );
}
