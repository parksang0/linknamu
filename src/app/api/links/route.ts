import { NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await getMongoClientPromise();
    const db = client.db("linknamu");
    const docs = await db
      .collection("links")
      .find({}, { projection: { _id: 0, id: 1, clickCount: 1 } })
      .toArray();

    return NextResponse.json({ ok: true, clicks: docs });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json(
      { ok: false, error: "클릭 수를 불러오지 못했습니다." },
      { status: 500 },
    );
  }
}
