import { NextResponse } from "next/server";
import { setContactMessageRead, deleteContactMessage } from "@/lib/db";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const messageId = Number(id);
  if (!Number.isInteger(messageId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const { isRead } = await request.json();

  try {
    await setContactMessageRead(messageId, Boolean(isRead));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to update contact message:", err);
    return NextResponse.json(
      { error: "Failed to update message" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const messageId = Number(id);
  if (!Number.isInteger(messageId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  try {
    await deleteContactMessage(messageId);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to delete contact message:", err);
    return NextResponse.json(
      { error: "Failed to delete message" },
      { status: 500 }
    );
  }
}
