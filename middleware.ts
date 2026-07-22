import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Only create the ratelimit instance if the environment variables are set
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? Redis.fromEnv()
  : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      // 10 requests per 10 seconds per IP
      limiter: Ratelimit.slidingWindow(10, '10 s'),
      analytics: true,
    })
  : null;

export async function middleware(request: NextRequest) {
  // Only apply rate limiting to /api/* routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    if (!ratelimit) {
      // If Upstash isn't configured yet, just let the request through
      // with a warning header (useful for local dev before keys are added)
      const response = NextResponse.next();
      response.headers.set('X-RateLimit-Configured', 'false');
      return response;
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? '127.0.0.1';
    
    try {
      const { success, limit, reset, remaining } = await ratelimit.limit(ip);

      if (!success) {
        return new NextResponse('Too Many Requests', {
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
            'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
          },
        });
      }

      const response = NextResponse.next();
      response.headers.set('X-RateLimit-Limit', limit.toString());
      response.headers.set('X-RateLimit-Remaining', remaining.toString());
      response.headers.set('X-RateLimit-Reset', reset.toString());
      return response;
    } catch (error) {
      console.error('Rate Limiting Error:', error);
      // In case of Redis connection failure, let the request through to avoid bringing down the app
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
