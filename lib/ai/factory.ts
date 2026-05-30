import { AnthropicProvider } from "@/lib/ai/providers/anthropic";
import { AIProvider } from "@/lib/ai/providers/base";
import { GeminiProvider } from "@/lib/ai/providers/gemini";
import { OpenAIProvider } from "@/lib/ai/providers/openai";
import { AIProviderName } from "@/lib/types/domain";

export const getAIProvider = (provider: AIProviderName): AIProvider => {
  switch (provider) {
    case "openai":
      return new OpenAIProvider();
    case "gemini":
      return new GeminiProvider();
    case "anthropic":
      return new AnthropicProvider();
    default:
      console.warn(`Unknown provider "${provider}", defaulting to OpenAI`);
      return new OpenAIProvider();
  }
};
