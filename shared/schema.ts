import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Story generation schemas
export const storyRequestSchema = z.object({
  genre: z.string().min(1, "Genre is required"),
  theme: z.string().min(1, "Theme is required"),
  character: z.string().min(1, "Main character type is required"),
});

export const storyResponseSchema = z.object({
  title: z.string(),
  plot: z.string(),
  character: z.string(),
});

export type StoryRequest = z.infer<typeof storyRequestSchema>;
export type StoryResponse = z.infer<typeof storyResponseSchema>;
