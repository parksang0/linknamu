"use client";

import type { LinkItem } from "@/types/link";

export default function LinkCard({ id, title, url }: LinkItem) {
  const handleClick = () => {
    fetch(`/api/links/${id}/click`, { method: "POST" }).catch(() => {});
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-center text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {title}
    </a>
  );
}
