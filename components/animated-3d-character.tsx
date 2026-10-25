'use client';

import Image from 'next/image';

type HeroAvatarImageProps = {
  ariaLabel: string;
  onActivate: () => void;
};

export function HeroAvatarImage({ ariaLabel, onActivate }: HeroAvatarImageProps) {
  return (
    <button type="button" className="portrait-hit" onClick={onActivate} aria-label={ariaLabel}>
      <Image
        src="/avatar-character.png"
        alt="TimLiu cartoon avatar"
        fill
        priority
        sizes="(min-width: 980px) 480px, 100vw"
        className="portrait-img"
      />
    </button>
  );
}
