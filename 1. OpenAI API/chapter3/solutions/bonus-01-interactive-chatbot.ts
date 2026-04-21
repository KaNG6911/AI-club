/**
 * SOLUTION -- Bonus 1: Interactive Chatbot
 */

import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import * as readline from "readline";

const client = new OpenAI();

async function main() {
  const messages: ChatCompletionMessageParam[] = [
    { role: "system", content: "You are a helpful assistant." },
  ];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (prompt: string): Promise<string> =>
    new Promise((resolve) => rl.question(prompt, resolve));

  console.log('AI Chatbot бэлэн! ("quit" гэж бичвэл гарна)\n');

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
    });

    const reply = response.choices[0].message.content ?? "";
    messages.push({ role: "assistant", content: reply });

    console.log(`Assistant: ${reply}\n`);
  }
}

main();
