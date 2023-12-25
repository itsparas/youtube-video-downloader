import { NextRequest, NextResponse } from "next/server";
import ytdl from "ytdl-core";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const url = searchParams.get("url");

  const video: any = await ytdl.getInfo(url as string);

  return NextResponse.json({
    videoUrl: video.videoDetails.video_url,
    formats: video.formats,
    thumbnail: video.videoDetails.thumbnails.at(-1).url,
    title: video.videoDetails.title,
    keywords: video.videoDetails.keywords,
  });
}
