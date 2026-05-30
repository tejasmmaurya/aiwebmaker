import { AIProvider, createFallbackBlueprint } from "@/lib/ai/providers/base";
import { AIRequestPayload } from "@/lib/types/domain";

export class OpenAIProvider implements AIProvider {
  async generateBlueprint(payload: AIRequestPayload) {
    return createFallbackBlueprint(payload.prompt);
  }
}
