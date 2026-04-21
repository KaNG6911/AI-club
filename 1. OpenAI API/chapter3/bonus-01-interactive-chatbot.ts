/**
 * Bonus 1: Interactive Chatbot
 *
 * Task 12-г бодит interactive chatbot болго.
 * Terminal-аас user input авч, "quit" гэж бичтэл ярилцана.
 *
 * Зааварчилгаа:
 * 1. readline ашиглаж terminal-аас input авдаг ask() helper бүтээ
 * 2. while(true) loop-ийн дотор:
 *    a. "You: " prompt-оор user input авах
 *    b. "quit" бол rl.close() + break
 *    c. user message-г messages-д push
 *    d. API request илгээх (max_completion_tokens: 200)
 *    e. assistant хариуг messages-д push
 *    f. "Assistant: ..." хэвлэх
 *
 * Ажиллуулах: npx tsx bonus-01-interactive-chatbot.ts
 */

import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import * as readline from "readline";

const client = new OpenAI();

async function main() {
  const messages: ChatCompletionMessageParam[] = [
    { role: "system", content: "You are a helpful assistant." },
  ];

  // TODO 1: readline interface үүсгэ (process.stdin / process.stdout)
  // const rl = readline.createInterface({ ... });

  // TODO 2: ask() helper бүтээ -- prompt бичээд хариу Promise-оор буцаа
  // const ask = (prompt: string): Promise<string> => ...;

  console.log('AI Chatbot бэлэн! ("quit" гэж бичвэл гарна)\n');

  // TODO 3: while(true) loop -- input -> quit шалгах -> API request -> хэвлэх
  // while (true) {
  //   const userInput = await ask("You: ");
  //   if (userInput.toLowerCase() === "quit") { ... break; }
  //   messages.push({ role: "user", content: userInput });
  //   const response = await client.chat.completions.create({ ... });
  //   const reply = ...;
  //   messages.push({ role: "assistant", content: reply });
  //   console.log(`Assistant: ${reply}\n`);
  // }
}

main();
