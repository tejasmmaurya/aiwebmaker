import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "queued",
    formats: ["zip", "github", "vercel", "firebase"],
    message: "Export pipelines are initialized for this project.",
  });
}
