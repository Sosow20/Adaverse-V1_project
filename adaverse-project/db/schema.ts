import { pgTable, serial, varchar, text, timestamp, integer} from "drizzle-orm/pg-core";


export const projectsTypes = pgTable("projects_types", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
});


export const promotions = pgTable("promotions", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    startDate: timestamp("start_date").notNull(),
});


export const studentProjects = pgTable("student_projects", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 200 }).notNull(),
    slug: varchar("slug", { length: 200 }).notNull().unique(),
    githubUrl: text("github_url").notNull(),
    demoUrl: text("demo_url").notNull(),
    thumbnailUrl: text("thumbnail_url"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    publishedAt: timestamp("published_at"), 
    promotionId: integer("promotion_id")
        .references(() => promotions.id, { onDelete: "cascade" })
        .notNull(),
    projectTypeId: integer("project_type_id")
        .references(() => projectsTypes.id, { onDelete: "cascade" })
        .notNull(),
});

