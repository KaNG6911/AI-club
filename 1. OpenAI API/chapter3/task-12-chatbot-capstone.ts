/**
 * Task 12: AI Chatbot Loop (CAPSTONE)
 * Block 4: Multi-Turn / Capstone
 *
 * For loop ашиглаж бүрэн chatbot бүтээ!
 * Энэ бол өнөөдрийн хамгийн complex task -- бодит product-д шууд хэрэглэгдэнэ.
 *
 * Зааварчилгаа:
 * 1. userMsgs массивыг loop-оор давтан үз
 * 2. Iteration бүрт:
 *    a. user message-г messages-д push хий
 *    b. БҮТЭН messages array-г API руу илгээ (max_completion_tokens: 100)
 *    c. Assistant хариуг messages-д push хий
 *    d. Хариуг "Assistant: ..." гэж хэвлэ
 *
 * Ажиллуулах: npx tsx task-12-chatbot-capstone.ts
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

  // TODO: userMsgs дотор loop ажиллуулж chatbot logic бич
  // for (const q of userMsgs) {
  //   1. console.log("User: ", q);
  //   2. messages.push({ role: "user", content: q });
  //   3. БҮТЭН messages array-г илгээ (max_completion_tokens: 100)
  //   4. Хариуг messages.push({ role: "assistant", content: ... })
  //   5. console.log("Assistant: ", reply, "\n");
  // }
}

main();

// Ойлгох:
// - 2 дахь асуулт "Summarize this" -- "this" гэж юуг хэлж байна вэ?
// - Model-д memory БАЙХГҮЙ -- бид БҮТЭН messages array-г илгээж байгаа учраас "this"-г ойлгодог!
