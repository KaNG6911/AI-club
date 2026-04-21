/**
 * SOLUTION -- Task 12: AI Chatbot Loop (CAPSTONE)
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
  ];

  const userMsgs = [
    "Explain what pi is.",
    "Summarize this in two bullet points.",
  ];

  for (const q of userMsgs) {
    console.log("User: ", q);

    messages.push({ role: "user", content: q });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_completion_tokens: 100,
    });

    const reply = response.choices[0].message.content ?? "";

    messages.push({ role: "assistant", content: reply });

    console.log("Assistant: ", reply, "\n");
  }
}

main();
