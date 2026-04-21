/**
 * Task 11: Conversation History
 * Block 4: Multi-Turn / Capstone
 *
 * Math tutor-ийн хариуг conversation history-д хадгалах.
 * Model-д memory БАЙХГҮЙ -- бид messages array-г бүтнээр илгээж байгаа.
 *
 * Зааварчилгаа:
 * 1. messages массив бэлдэ (system "math tutor" + user "Explain what pi is.")
 * 2. Request илгээ (max_completion_tokens: 100)
 * 3. Assistant хариуг шинэ message болгож messages-д push() хий
 * 4. messages-г хэвлэж шалга -- 3 message байгаа эсэх
 *
 * Ажиллуулах: npx tsx task-11-conversation-history.ts
 */

import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const client = new OpenAI();

async function main() {
  // TODO 1: messages массив зарла (system + user)
  // const messages: ChatCompletionMessageParam[] = [ ... ];

  // TODO 2: Request илгээ (max_completion_tokens: 100)
  // const response = await client.chat.completions.create({ ... });

  // TODO 3: Assistant хариуг messages-д нэм
  // const assistantMessage: ChatCompletionMessageParam = { role: "assistant", content: ... };
  // messages.push(assistantMessage);

  // TODO 4: messages-г хэвлэ
  // console.log(messages);
}

main();

// Ойлгох: messages array-д assistant хариу нэмснээр
// дараагийн request өмнөх яриаг "мэддэг" болно.
