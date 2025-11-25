"use server"

import { db } from "@/db/drizzle";
import { projectsTypes } from "@/db/schema";

export async function GET() {
  const data = await db.select().from(projectsTypes);
  return Response.json(data);
}
