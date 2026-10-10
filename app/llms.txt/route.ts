import { getLlmsIndex } from '@/lib/agent-content';

export const dynamic = 'force-static';

export function GET() {
  return new Response(getLlmsIndex(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      Link: '</llms-full.txt>; rel="alternate"; type="text/markdown"',
    },
  });
}
