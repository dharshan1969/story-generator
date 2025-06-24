import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { storyRequestSchema } from "@shared/schema";
import { generateStoryIdea } from "./services/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Story generation endpoint
  app.post("/api/generate-story", async (req, res) => {
    try {
      // Validate request body
      const validationResult = storyRequestSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({
          message: "Invalid request data",
          errors: validationResult.error.issues,
        });
      }

      const { genre, theme, character } = validationResult.data;

      // Generate story using OpenAI or fallback
      const storyIdea = await generateStoryIdea(genre, theme, character);

      res.json(storyIdea);
    } catch (error) {
      console.error("Story generation error:", error);
      
      // Return generic error since fallback should handle most cases
      res.status(500).json({
        message: "An unexpected error occurred while generating the story idea.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
