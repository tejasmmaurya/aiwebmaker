import { NextResponse } from "next/server";
import { getAIProvider } from "@/lib/ai/factory";
import { AIRequestPayload, AIProviderName } from "@/lib/types/domain";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<AIRequestPayload>;

    if (!body.prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const providerName = (body.provider ?? "openai") as AIProviderName;
    const provider = getAIProvider(providerName);
    const response = await provider.generateBlueprint({
      provider: providerName,
      prompt: body.prompt,
      projectContext: body.projectContext,
    });

    return NextResponse.json({ data: response });
  } catch {
    return NextResponse.json({ error: "Failed to generate blueprint" }, { status: 500 });
  }
}
