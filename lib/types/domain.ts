export type AIProviderName = "openai" | "gemini" | "anthropic";

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  plan: "free" | "pro" | "team";
  emailVerified: boolean;
  createdAt: string;
}

export interface Project {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  techStack: string[];
  framework: string;
  database: string;
  deploymentTarget: string;
  status: "draft" | "building" | "ready";
  createdAt: string;
  updatedAt: string;
}

export interface Template {
  id: string;
  title: string;
  category: "SaaS" | "E-Commerce" | "Portfolio" | "Dashboard" | "AI Tools" | "Social Apps";
  description: string;
  favorites: number;
}

export interface AIRequestPayload {
  provider: AIProviderName;
  prompt: string;
  projectContext?: Record<string, unknown>;
}

export interface AIResponse {
  requirements: string[];
  features: string[];
  userFlow: string[];
  databaseSchema: Array<{ name: string; fields: string[] }>;
  frontendPlan: string[];
  backendPlan: string[];
}

export interface FirestoreCollections {
  users: UserProfile;
  projects: Project;
  templates: Template;
  likes: { id: string; userId: string; projectId: string; createdAt: string };
  comments: { id: string; projectId: string; userId: string; content: string; createdAt: string };
  competitions: { id: string; title: string; startsAt: string; endsAt: string };
  notifications: { id: string; userId: string; content: string; read: boolean; createdAt: string };
  subscriptions: { id: string; userId: string; plan: "free" | "pro" | "team"; status: string };
  analytics: { id: string; metric: string; value: number; createdAt: string };
}
