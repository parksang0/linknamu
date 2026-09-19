"use client";

import type { LinkItem } from "@/types/link";

interface LinkCardProps extends LinkItem {
  onClicked?: (id: string) => void;
}

export default function LinkCard({
  id,
  title,
  url,
  clickCount,
  onClicked,
}: LinkCardProps) {
  const handleClick = () => {
    onClicked?.(id);
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
      <span className="flex-1">{label}</span>
      <span className="shrink-0 text-xs font-normal text-zinc-500 dark:text-zinc-400">
        {clickCount}회
      </span>
    </a>
  );
}
