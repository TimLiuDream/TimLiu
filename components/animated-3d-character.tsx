'use client';

import Image from 'next/image';

type HeroAvatarImageProps = {
  ariaLabel: string;
  onActivate: () => void;
};

export function HeroAvatarImage({ ariaLabel, onActivate }: HeroAvatarImageProps) {
  return (
    <button
      type="button"
      className="relative block h-full w-full overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      onClick={onActivate}
      aria-label={ariaLabel}
    >
      <Image
        src="/avatar-character.png"
        alt="TimLiu cartoon avatar"
        fill
        priority
        sizes="(min-width: 1024px) 500px, 100vw"
        className="object-cover object-center"
      />
    </button>
  );
}
