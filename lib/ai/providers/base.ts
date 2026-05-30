import { AIRequestPayload, AIResponse } from "@/lib/types/domain";

export interface AIProvider {
  generateBlueprint(payload: AIRequestPayload): Promise<AIResponse>;
}

export const createFallbackBlueprint = (prompt: string): AIResponse => ({
  requirements: [
    `Build based on prompt: ${prompt}`,
    "Deliver responsive UI, API, and schema",
    "Prepare deploy-ready starter templates",
  ],
  features: ["Authentication", "CRUD workflows", "Analytics dashboard", "Notifications"],
  userFlow: ["Onboarding", "Project creation", "AI generation", "Export and deploy"],
  databaseSchema: [
    { name: "users", fields: ["id", "email", "plan", "createdAt"] },
    { name: "projects", fields: ["id", "ownerId", "name", "status", "updatedAt"] },
  ],
  frontendPlan: ["Landing page", "Dashboard", "Workspace with Monaco + preview"],
  backendPlan: ["Next.js API routes", "Firebase auth guards", "Firestore CRUD services"],
});
