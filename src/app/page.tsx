import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import type { LinkItem } from "@/types/link";

const profile = {
  name: "홍길동",
  bio: "세계 최강 바이브코더",
};

const links: LinkItem[] = [
  { id: "1", title: "GitHub", url: "https://github.com", clickCount: 0 },
  { id: "2", title: "LinkedIn", url: "https://linkedin.com", clickCount: 0 },
  { id: "3", title: "Blog", url: "https://example.com/blog", clickCount: 0 },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-10 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-8 dark:border-zinc-800 dark:bg-zinc-950">
        <Profile {...profile} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
