/**
 * SOLUTION -- Bonus 2: Custom AI Assistant
 * (Жишээ хариу: Монгол хоол зөвлөдөг assistant)
 */

import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import * as readline from "readline";

const client = new OpenAI();

async function main() {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: `You are a Mongolian food recommendation assistant. You suggest traditional and modern Mongolian dishes based on the user's preferences.

If the user asks about non-food topics, respond with: 'I specialize in Mongolian cuisine only. Please ask me about food!'`,
    },
    {
      role: "user",
      content: "What should I eat for dinner tonight? I like meat.",
    },
    {
      role: "assistant",
      content:
        "I recommend Buuz (steamed dumplings filled with minced meat) — a classic Mongolian comfort food. If you want something heartier, try Khorkhog (meat cooked with hot stones). Both are perfect for dinner!",
    },
  ];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (prompt: string): Promise<string> =>
    new Promise((resolve) => rl.question(prompt, resolve));

  console.log('Custom AI Assistant бэлэн! ("quit" гэж бичвэл гарна)\n');

  while (true) {
    const userInput = await ask("You: ");

    if (userInput.toLowerCase() === "quit") {
      console.log("Баяртай!");
      rl.close();
      break;
    }

    messages.push({ role: "user", content: userInput });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_completion_tokens: 200,
      temperature: 0.7,
    });

    const reply = response.choices[0].message.content ?? "";
    messages.push({ role: "assistant", content: reply });

    console.log(`Assistant: ${reply}\n`);
  }
}

main();
