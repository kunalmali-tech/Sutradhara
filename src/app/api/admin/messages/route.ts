import { NextResponse } from "next/server";
import { listContactMessages } from "@/lib/db";

export async function GET() {
  try {
    const messages = await listContactMessages();
    return NextResponse.json({ messages });
  } catch (err) {
    console.error("Failed to list contact messages:", err);
    return NextResponse.json(
      { error: "Failed to load messages" },
      { status: 500 }
    );
  }
}
