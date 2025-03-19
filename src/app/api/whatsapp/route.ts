import { NextResponse } from 'next/server';

export async function GET(): Promise<Response> {
  return new NextResponse('558892772736', { status: 200 });
}
