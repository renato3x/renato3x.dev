import { NextResponse } from 'next/server';

export async function GET(): Promise<Response> {
  return new NextResponse(process.env.WHATSAPP_NUMBER, { status: 200 });
}
