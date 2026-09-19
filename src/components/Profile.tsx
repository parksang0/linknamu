import Image from "next/image";
import type { ProfileData } from "@/types/link";

export default function Profile({ name, bio, avatarUrl }: ProfileData) {
  const initial = name.charAt(0);

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full bg-zinc-200 shadow-lg shadow-orange-200/60 ring-4 ring-white/80 sm:h-32 sm:w-32 dark:bg-zinc-800 dark:shadow-black/40 dark:ring-white/10">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={`${name} 프로필 사진`}
            fill
            sizes="128px"
            className="object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-3xl font-semibold text-zinc-500 dark:text-zinc-400">
            {initial}
          </span>
        )}
      </div>
      <div>
        <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          {name}
        </h1>
        <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
          {bio}
        </p>
      </div>
    </div>
  );
}
