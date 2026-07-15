import { NextResponse } from "next/server";
import { insertContactMessage } from "@/lib/db";

export async function POST(request: Request) {
  const { name, email, phone, goal, message } = await request.json();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required" },
      { status: 400 }
    );
  }

  try {
    await insertContactMessage({ name, email, phone, goal, message });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to save contact message:", err);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}
