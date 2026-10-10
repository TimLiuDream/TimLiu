import { getFullProfile } from '@/lib/agent-content';

export const dynamic = 'force-static';

export function GET() {
  return new Response(getFullProfile(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      Link: '</llms.txt>; rel="describedby"',
    },
  });
}
