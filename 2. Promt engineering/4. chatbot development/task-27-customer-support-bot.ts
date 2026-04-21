/**
 * Task 27: Customer Support Chatbot
 * Chapter 4: Prompt Engineering for Chatbot Development
 *
 * Electronics e-commerce-д зориулсан customer support chatbot system prompt бүтээ.
 * Purpose + audience + tone -- 3 бүрэлдэхүүнийг тусдаа string-д хадгал.
 *
 * Зааварчилгаа:
 * 1. chatbotPurpose: chatbot-ийн зорилго (electronics e-commerce, order tracking, troubleshooting)
 * 2. audienceGuidelines: target audience (tech-savvy electronics buyers)
 * 3. toneGuidelines: professional, user-friendly
 * 4. Нэгтгэж systemPrompt үүсгэ
 * 5. "My new headphones aren't connecting to my device" гэсэн query-г туршиж үзэ
 *
 * Ажиллуулах: npx tsx "4. Prompt Engineering for Chatbot Development/task-27-customer-support-bot.ts"
 */

import OpenAI from "openai";

const client = new OpenAI();

async function getResponse(systemPrompt: string, userPrompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0,
  });
  return response.choices[0].message.content ?? "";
}

async function main() {
  // TODO 1: chatbotPurpose string бич
  // const chatbotPurpose = "...";

  // TODO 2: audienceGuidelines string бич
  // const audienceGuidelines = "...";

  // TODO 3: toneGuidelines string бич
  // const toneGuidelines = "...";

  // TODO 4: Нэгтгэж systemPrompt үүсгэ
  // const systemPrompt = chatbotPurpose + audienceGuidelines + toneGuidelines;

  // TODO 5: Query туршиж үзэ
  // const response = await getResponse(systemPrompt, "My new headphones aren't connecting to my device");
  // console.log(response);
}

main();
