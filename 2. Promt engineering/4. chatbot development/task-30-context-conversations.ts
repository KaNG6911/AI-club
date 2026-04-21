/**
 * Task 30: External Context via Sample Conversations
 * Chapter 4: Prompt Engineering for Chatbot Development
 *
 * LLM training data-д байхгүй мэдээллийг sample conversation-оор inject хий.
 * MyPersonalDelivery-ийн chatbot-д company-specific мэдээлэл өг.
 *
 * Зааварчилгаа:
 * 1. systemPrompt: chatbot-ийн зорилго + gentle tone
 * 2. messages array-д 4 message оруул:
 *    - system: systemPrompt
 *    - user: contextQuestion (юу хүргэдэг вэ?)
 *    - assistant: contextAnswer (хүргэлтийн мэдээлэл)
 *    - user: "Do you deliver furniture?" (бодит асуулт)
 * 3. Хариуг хэвлэ
 *
 * Ажиллуулах: npx tsx "4. Prompt Engineering for Chatbot Development/task-30-context-conversations.ts"
 */

import OpenAI from "openai";

const client = new OpenAI();

const contextQuestion = "What types of items can be delivered using MyPersonalDelivery?";
const contextAnswer =
  "We deliver everything from everyday essentials such as groceries, medications, and documents " +
  "to larger items like electronics, clothing, and furniture. However, please note that we " +
  "currently do not offer delivery for hazardous materials or extremely fragile items requiring " +
  "special handling.";

async function main() {
  // TODO 1: systemPrompt бич
  // MyPersonalDelivery-ийн customer service chatbot
  // Gentle, helpful tone
  // const systemPrompt = "...";

  // TODO 2: messages array бүтээ -- 4 message:
  // [system, user(context Q), assistant(context A), user(real Q)]
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      // { role: "system", content: systemPrompt },
      // { role: "user", content: contextQuestion },
      // { role: "assistant", content: contextAnswer },
      // { role: "user", content: "Do you deliver furniture?" },
    ],
    temperature: 0,
  });

  console.log(response.choices[0].message.content);
}

main();

// Туршилт: Context conversation-г хасаад "Do you deliver furniture?" гэж асуу.
// Model context байхгүйгээр яаж хариулдгийг харьцуул.
