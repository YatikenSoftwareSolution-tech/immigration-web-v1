import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET(request, context) {
  try {
    const { id } = await context.params; // Await params before accessing 'id'
    const DATA_FILE = path.join(process.cwd(), "data.json");

    let allData = [];
    try {
      const raw = await fs.promises.readFile(DATA_FILE, "utf8");
      allData = JSON.parse(raw) || [];
    } catch (err) {
      return NextResponse.json({ error: "Data store not found." }, { status: 500 });
    }

    const record = allData.find((entry) => entry.id === id);
    if (!record) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Return the full record (including `documents` sub‐object with URLs)
    return NextResponse.json(record, { status: 200 });
  } catch (err) {
    console.error("GET /api/data/[id] ERROR:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
