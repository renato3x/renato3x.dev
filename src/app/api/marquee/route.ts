import { NextResponse } from 'next/server';
import getConfig from 'next/config';
import fs from 'node:fs';
import path from 'node:path';

export async function GET() {
  const { serverRuntimeConfig } = getConfig();

  const isDevelopment = process.env.NODE_ENV === 'development'
  const marqueeItemsPath = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    ...(isDevelopment ? ['public', 'images', 'marquee'] : ['images', 'marquee']),
  );

  const marqueeFiles = fs.readdirSync(marqueeItemsPath)
    .map((filename) => `/images/marquee/${filename}`);

  return NextResponse.json<string[]>(marqueeFiles, { status: 200 });
}
