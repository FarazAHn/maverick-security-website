import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      console.log("New contact submission received:", {
        id: submission.id,
        name: submission.fullName,
        company: submission.company,
        email: submission.email,
        service: submission.serviceInterest,
      });
      
      res.status(201).json({
        message: "Contact submission received successfully",
        id: submission.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Invalid submission data",
          errors: error.errors,
        });
      } else {
        console.error("Error creating contact submission:", error);
        res.status(500).json({
          message: "Internal server error",
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  // Get specific contact submission
  app.get("/api/contact/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid submission ID" });
      }

      const submission = await storage.getContactSubmission(id);
      if (!submission) {
        return res.status(404).json({ message: "Submission not found" });
      }

      res.json(submission);
    } catch (error) {
      console.error("Error fetching contact submission:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  // Mark contact submission as processed
  app.patch("/api/contact/:id/processed", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid submission ID" });
      }

      const submission = await storage.markContactSubmissionProcessed(id);
      if (!submission) {
        return res.status(404).json({ message: "Submission not found" });
      }

      res.json({
        message: "Submission marked as processed",
        submission,
      });
    } catch (error) {
      console.error("Error updating contact submission:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
