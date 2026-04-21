/**
 * Task 01: Message Roles
 * Chapter 1: Introduction to Prompt Engineering Best Practices
 *
 * Networking event management agency-д зориулсан chatbot бүтээ.
 * OpenAI Chat Completions endpoint-д 3 role-ийг зөв ашиглаж мессеж илгээ.
 *
 * Зааварчилгаа:
 * 1. OpenAI client үүсгэ
 * 2. messages array-д 3 role-г тодорхойл:
 *    - system: "You are a helpful event management assistant."
 *    - user: "What are some good conversation starters at networking events?"
 *    - assistant: "The easiest way to get to know each other directly is..."
 * 3. chat.completions.create-г дуудаж хариуг хэвлэ
 *
 * Ажиллуулах: npx tsx "1. Introduction to Prompt Engineering Best Practices/task-01-message-roles.ts"
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  // TODO 1: messages array үүсгэ -- system, user, assistant role бүгдийг нэм
  const conversationMessages = [
    // { role: "system", content: "..." },
    // { role: "user", content: "..." },
    // { role: "assistant", content: "..." },
  ];

  // TODO 2: chat.completions.create дуудаж хариуг авна
  // const response = await client.chat.completions.create({
  //   model: "gpt-4o-mini",
  //   messages: conversationMessages,
  // });

  // TODO 3: Хариуг хэвлэ
  // console.log(response.choices[0].message.content);
}

main();
