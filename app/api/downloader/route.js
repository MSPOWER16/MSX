export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    let teraboxUrl = body.url;

    if (!teraboxUrl) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    if (!teraboxUrl.includes('terabox.com')) {
      return NextResponse.json({ error: 'Invalid TeraBox URL' }, { status: 400 });
    }

    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "357969b221msh32ff3122376c473p103b55jsn8b5dd54f26b7"); 
    myHeaders.append("content-type", "application/json");

    const raw = JSON.stringify({ url: teraboxUrl });

    const response = await fetch(
      "https://terabox-downloader-direct-download-link-generator.p.rapidapi.com/fetch",
      { method: "POST", headers: myHeaders, body: raw }
    );

    const data = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
