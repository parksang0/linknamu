import { NextRequest, NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";

export async function POST(
  _req: NextRequest,
  ctx: RouteContext<"/api/links/[id]/click">,
) {
  const { id } = await ctx.params;

  try {
    const client = await getMongoClientPromise();
    const db = client.db("linknamu");
    const result = await db
      .collection("links")
      .updateOne({ id }, { $inc: { clickCount: 1 } }, { upsert: true });

    return NextResponse.json({ ok: true, id, result });
  } catch (error) {
    console.error("클릭 수 집계 실패:", error);
    return NextResponse.json(
      { ok: false, error: "클릭 수를 기록하지 못했습니다." },
      { status: 500 },
    );
  }
}
