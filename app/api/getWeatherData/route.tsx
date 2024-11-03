// route.tsx

import { NextResponse } from 'next/server';
export const dynamic = "force-dynamic";

const WEATHER_API_KEY = process.env.API_KEY;

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");

    if (!city) {
        return NextResponse.json({ error: "City is required" }, { status: 400 });
    }

    const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days%2Ccurrent%2Cevent&key=${WEATHER_API_KEY}&contentType=json`);

    if (res.status !== 200) {
        console.log("API Key:", process.env.API_KEY);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
}
