import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(process.env.WHATSAPP_NUMBER, { status: 200 });
}
