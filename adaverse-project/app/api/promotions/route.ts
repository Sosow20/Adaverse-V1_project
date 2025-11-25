"use server"

import { db } from "@/db/drizzle";
import { promotions } from "@/db/schema";

export async function GET() {
  const data = await db.select().from(promotions);
  return Response.json(data);
}
