'use client';

import Link from 'next/link';
import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <span className="footer-copy">© 2026 TimLiu</span>
          <Link href="/tools">/tools</Link>
          <Link href="/web3">/web3</Link>
          <Link href="/now">/now</Link>
          <a href="/feed.xml">RSS</a>
          <a href="/llms.txt">llms.txt</a>
        </div>
        <span className="footer-motto">{t(lang, 'footer.builtWith')}</span>
      </div>
    </footer>
  );
}
