import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0d1117',
          fontFamily: '"Inter", sans-serif',
        }}
      >
        {/* Card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 60,
            padding: 60,
            borderRadius: 28,
            border: '1px solid #30363d',
            background: '#161b22',
            flex: 1,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#c9d1d9',
              display: 'flex',
            }}
          >
            TimLiu
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: '#8b949e',
              display: 'flex',
              marginTop: 20,
            }}
          >
            Web3 撸空投 / Golang / 折腾 Side Project
          </div>

          {/* Code line */}
          <div
            style={{
              fontSize: 22,
              color: '#58a6ff',
              display: 'flex',
              marginTop: 40,
              fontFamily: '"JetBrains Mono", "Consolas", monospace',
            }}
          >
            Build. Ship. Refine.
          </div>

          {/* Bottom description */}
          <div
            style={{
              fontSize: 24,
              color: '#c9d1d9',
              display: 'flex',
              marginTop: 40,
            }}
          >
            GitHub-style. Minimal. Useful. Maintainable.
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