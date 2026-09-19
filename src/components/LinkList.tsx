"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/types/link";
import LinkCard from "@/components/LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/links")
      .then((res) => res.json())
      .then((data: { ok: boolean; clicks?: { id: string; clickCount: number }[] }) => {
        if (cancelled || !data.ok || !data.clicks) return;
        setCounts(
          Object.fromEntries(data.clicks.map((doc) => [doc.id, doc.clickCount])),
        );
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const handleClicked = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          clickCount={counts[link.id] ?? 0}
          onClicked={handleClicked}
        />
      ))}
    </div>
  );
}
