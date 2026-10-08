import { NextRequest, NextResponse } from 'next/server';

// Simple placeholder image generator
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Book';
  const size = searchParams.get('size') || '200x280';

  // Generate SVG placeholder
  const [width, height] = size.split('x').map(Number);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e0e0e0"/>
          <stop offset="100%" stop-color="#f5f5f5"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <rect x="20" y="20" width="${width-40}" height="${height-40}" fill="#fff" rx="8"/>
      <text x="${width/2}" y="${height/2}" font-family="Arial, sans-serif" font-size="14" fill="#999" text-anchor="middle" dominant-baseline="middle" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
        ${title.length > 30 ? title.substring(0, 30) + '...' : title}
      </text>
    </svg>
  `.trim();

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}