import { ImageResponse } from 'next/og';
import { projects } from '@/data/projects';
import { siteConfig } from '@/lib/site-config';
import { t } from '@/lib/i18n';

export async function GET() {
  const hostname = new URL(siteConfig.url).hostname.replace(/^www\./, '');
  const projectCount = projects.length;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#09090b',
          padding: 44,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            padding: '48px 56px',
            borderRadius: 28,
            border: '1.5px solid #27272a',
            backgroundColor: '#111114',
          }}
        >
          {/* Top header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  border: '1.5px solid #27272a',
                  backgroundColor: '#18181c',
                  color: '#fafafa',
                  fontSize: 21,
                  fontWeight: 700,
                }}
              >
                TL
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    fontSize: 32,
                    fontWeight: 700,
                    color: '#fafafa',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {siteConfig.name}
                </div>
                <div
                  style={{
                    display: 'flex',
                    marginTop: 5,
                    fontSize: 18,
                    color: '#a1a1aa',
                  }}
                >
                  {siteConfig.tagline.en}
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '9px 20px',
                borderRadius: 999,
                border: '1.5px solid #27272a',
                backgroundColor: '#18181c',
                color: '#e4e4e7',
                fontSize: 19,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: 9,
                  height: 9,
                  borderRadius: 999,
                  backgroundColor: '#10b981',
                }}
              />
              {hostname}
            </div>
          </div>

          {/* Center positioning */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                fontSize: 20,
                color: '#10b981',
                letterSpacing: '0.06em',
              }}
            >
              INDIE BUILDER · AI AGENTS & WEB3
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: 14,
                fontSize: 46,
                fontWeight: 700,
                color: '#fafafa',
                letterSpacing: '-0.025em',
                lineHeight: 1.25,
              }}
            >
              {t('zh', 'hero.positioning')}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 26,
                padding: '14px 22px',
                borderRadius: 14,
                border: '1.5px solid #27272a',
                backgroundColor: '#09090b',
                fontSize: 21,
              }}
            >
              <span style={{ color: '#10b981', marginRight: 12 }}>$</span>
              <span style={{ color: '#a1a1aa' }}>
                {`${t('en', 'hero.focusValue')} ${t('en', 'hero.modeValue')}`}
              </span>
            </div>
          </div>

          {/* Footer tags & project metric */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 22,
              borderTop: '1.5px solid #27272a',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {siteConfig.tags.map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: 'flex',
                    padding: '6px 16px',
                    borderRadius: 999,
                    border: '1.5px solid #27272a',
                    backgroundColor: '#18181c',
                    color: '#d4d4d8',
                    fontSize: 18,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                fontSize: 20,
                color: '#a1a1aa',
              }}
            >
              {`${projectCount} Live Apps · /tools · /web3 · /now`}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
