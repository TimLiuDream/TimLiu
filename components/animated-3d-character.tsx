'use client';

import Image from 'next/image';

type HeroAvatarImageProps = {
  ariaLabel: string;
  hint: string;
  onActivate: () => void;
};

export function HeroAvatarImage({ ariaLabel, hint, onActivate }: HeroAvatarImageProps) {
  return (
    <button type="button" className="portrait-hit" onClick={onActivate} aria-label={ariaLabel}>
      <Image
        src="/avatar-character.png"
        alt="TimLiu builder illustration"
        fill
        priority
        sizes="(min-width: 980px) 420px, 100vw"
        className="portrait-img"
      />
      <span className="portrait-hint" aria-hidden="true">
        {hint}
      </span>
    </button>
  );
}
