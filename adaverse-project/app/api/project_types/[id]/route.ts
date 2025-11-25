import { db } from "@/db/drizzle";
import { projectsTypes } from "@/db/schema";
import { eq } from "drizzle-orm";



export const GET = async (_req: Request, { params }: { params: { id: string } }) => {
    console.log({ params })
    const { id } = await params;
    const data = await db.select().from(projectsTypes).where(eq(projectsTypes.id, Number(id)));   
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}