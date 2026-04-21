/**
 * Task 8: System Messages
 * Block 4: Roles, Guardrails & Multi-Turn
 *
 * System message ашиглаж study planning assistant бүтээ.
 * System role = assistant-ийн зан байдлыг тодорхойлдог.
 *
 * Зааварчилгаа:
 * 1. messages array-д 2 message бэлдэ:
 *    - system: "You are a study planning assistant that creates plans for learning new skills."
 *    - user: "I want to learn to speak Dutch."
 * 2. Chat Completions request илгээ (max_completion_tokens: 150)
 * 3. Хариуг хэвлэ
 *
 * Ажиллуулах: npx tsx task-08-system-messages.ts
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  // TODO 1: messages массив зарла (system + user)
  // TODO 2: Request илгээ (max_completion_tokens: 150)
  // const response = await client.chat.completions.create({ ... });
  // TODO 3: Хариуг хэвлэ
  // console.log(...);
}

main();

// Ажиглах: System message-г хасаад дахин ажиллуулбал хариу яаж өөрчлөгдөх вэ?
// System message = AI feature-ийн "constitution"
