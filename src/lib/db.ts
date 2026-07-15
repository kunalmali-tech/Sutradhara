import { Pool } from "pg";

declare global {
  var __pgPool: Pool | undefined;
}

// Lazily create the pool on first query rather than at module import time,
// so a missing/bad DATABASE_URL surfaces as a normal request-time error
// (caught by the calling route handler) instead of crashing the whole route.
function getPool(): Pool {
  if (!global.__pgPool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is not set");
    }
    global.__pgPool = new Pool({
      connectionString,
      ssl: connectionString.includes("localhost") ? false : { rejectUnauthorized: false },
    });
  }
  return global.__pgPool;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string | null;
  phone: string;
  goal: string | null;
  message: string | null;
  is_read: boolean;
  created_at: string;
}

export async function insertContactMessage(data: {
  name: string;
  email: string;
  phone: string;
  goal: string;
  message: string;
}): Promise<void> {
  await getPool().query(
    `INSERT INTO contact_messages (name, email, phone, goal, message) VALUES ($1, $2, $3, $4, $5)`,
    [data.name, data.email || null, data.phone, data.goal || null, data.message || null]
  );
}

export async function listContactMessages(): Promise<ContactMessage[]> {
  const { rows } = await getPool().query<ContactMessage>(
    `SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 200`
  );
  return rows;
}

export async function setContactMessageRead(id: number, isRead: boolean): Promise<void> {
  await getPool().query(`UPDATE contact_messages SET is_read = $1 WHERE id = $2`, [isRead, id]);
}

export async function deleteContactMessage(id: number): Promise<void> {
  await getPool().query(`DELETE FROM contact_messages WHERE id = $1`, [id]);
}
