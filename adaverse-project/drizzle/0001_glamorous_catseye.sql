ALTER TABLE "student_projects" DROP CONSTRAINT "student_projects_promotion_id_promotions_id_fk";
--> statement-breakpoint
ALTER TABLE "student_projects" DROP CONSTRAINT "student_projects_project_type_id_projects_types_id_fk";
--> statement-breakpoint
ALTER TABLE "projects_types" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "promotions" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "student_projects" ALTER COLUMN "title" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "student_projects" ALTER COLUMN "slug" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "student_projects" ADD COLUMN "illustration" text;--> statement-breakpoint
ALTER TABLE "student_projects" ADD CONSTRAINT "student_projects_promotion_id_promotions_id_fk" FOREIGN KEY ("promotion_id") REFERENCES "public"."promotions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student_projects" ADD CONSTRAINT "student_projects_project_type_id_projects_types_id_fk" FOREIGN KEY ("project_type_id") REFERENCES "public"."projects_types"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student_projects" DROP COLUMN "thumbnail_url";