/**
 * SOLUTION -- Task 11: Conversation History
 */

import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const client = new OpenAI();

async function main() {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: "You are a helpful math tutor that speaks concisely.",
    },
    { role: "user", content: "Explain what pi is." },
  ];

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    max_completion_tokens: 100,
  });

  const assistantMessage: ChatCompletionMessageParam = {
    role: "assistant",
    content: response.choices[0].message.content ?? "",
  };
  messages.push(assistantMessage);

  console.log(messages);
}

main();
