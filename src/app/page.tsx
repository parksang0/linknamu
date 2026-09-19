import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import type { LinkItem } from "@/types/link";

const profile = {
  name: "IntoTheSec",
  bio: "업무적으로 다양한 경험을 해보고 싶은 정보보호인",
  avatarUrl: "/profile.jpg",
};

const links: LinkItem[] = [
  {
    id: "1",
    title: "📧 E-mail",
    url: "mailto:intothesec@gmail.com",
    clickCount: 0,
  },
  {
    id: "2",
    title: "💼 LinkedIn",
    url: "https://www.linkedin.com/in/intothesec/",
    clickCount: 0,
  },
  {
    id: "3",
    title: "📝 Blog",
    url: "https://intothesec.com",
    clickCount: 0,
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 px-6 py-12 dark:from-neutral-950 dark:via-stone-950 dark:to-orange-950/10">
      <main className="flex w-full max-w-sm flex-col items-center gap-10 rounded-[2rem] border border-white/60 bg-white/30 px-6 py-12 shadow-xl shadow-orange-100/50 backdrop-blur-xl sm:px-10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40">
        <Profile {...profile} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
