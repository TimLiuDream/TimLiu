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
          backgroundColor: '#f4f0e7',
          padding: 44,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            padding: '46px 54px',
            borderRadius: 24,
            border: '2px solid #e0d5c6',
            backgroundColor: '#fbf8f3',
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
                  width: 52,
                  height: 52,
                  border: '2.5px solid #8f3418',
                  borderRadius: 6,
                  color: '#8f3418',
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  transform: 'rotate(-8deg)',
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
                    color: '#1c1916',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {siteConfig.name}
                </div>
                <div
                  style={{
                    display: 'flex',
                    marginTop: 4,
                    fontSize: 18,
                    color: '#5e574c',
                  }}
                >
                  {siteConfig.tagline.zh}
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 20px',
                borderRadius: 999,
                border: '1.5px solid #e0d5c6',
                backgroundColor: '#efe8dc',
                color: '#4f493f',
                fontSize: 20,
              }}
            >
              {hostname}
            </div>
          </div>

          {/* Center positioning */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  display: 'flex',
                  width: 11,
                  height: 11,
                  backgroundColor: '#8f3418',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  fontSize: 18,
                  color: '#4f493f',
                  letterSpacing: '0.08em',
                }}
              >
                {`${t('zh', 'hero.badge')} · ${t('en', 'hero.badge').toUpperCase()}`}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: 18,
                fontSize: 46,
                fontWeight: 700,
                color: '#1c1916',
                letterSpacing: '-0.02em',
                lineHeight: 1.28,
              }}
            >
              {t('zh', 'hero.positioning')}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 28,
                padding: '14px 20px',
                borderRadius: 14,
                border: '1.5px solid #e0d5c6',
                backgroundColor: '#f4f0e7',
                fontSize: 21,
              }}
            >
              <span style={{ color: '#8f3418', marginRight: 10 }}>&gt;</span>
              <span style={{ color: '#4f493f' }}>
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
              borderTop: '1.5px solid #e0d5c6',
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
                    border: '1.5px solid #e0d5c6',
                    color: '#4f493f',
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
                color: '#5e574c',
              }}
            >
              {`${projectCount} Projects · /tools · /web3 · /now`}
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
