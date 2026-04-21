/**
 * Task 28: Behavioral Control -- Chatbot Conditions
 * Chapter 4: Prompt Engineering for Chatbot Development
 *
 * Task 27-ийн chatbot-д 2 нөхцөл нэм:
 * 1. Order query байгаа ч order number байхгүй бол асуух
 * 2. Technical issue байвал "I'm sorry to hear about your issue with..." гэж эхлэх
 *
 * Зааварчилгаа:
 * 1. orderNumberCondition string бич
 * 2. technicalIssueCondition string бич
 * 3. refinedSystemPrompt = baseSystemPrompt + conditions
 * 4. 2 test query ажиллуул:
 *    - "My laptop screen is flickering. What should I do?"
 *    - "Can you help me track my recent order?"
 *
 * Ажиллуулах: npx tsx "4. Prompt Engineering for Chatbot Development/task-28-behavior-control.ts"
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

const baseSystemPrompt =
  "You are a customer support chatbot for an e-commerce company specializing in electronics. " +
  "Your role is to assist customers with product inquiries, order tracking, and troubleshooting. " +
  "The target audience consists of tech-savvy individuals. " +
  "Use a professional and user-friendly tone.";

async function main() {
  // TODO 1: Order number condition бич
  // const orderNumberCondition = "...";

  // TODO 2: Technical issue condition бич
  // "I'm sorry to hear about your issue with [product]." гэж эхлэх
  // const technicalIssueCondition = "...";

  // TODO 3: refinedSystemPrompt нэгтгэ
  // const refinedSystemPrompt = baseSystemPrompt + "\n" + orderNumberCondition + "\n" + technicalIssueCondition;

  // TODO 4: 2 query туршиж үзэ
  // const response1 = await getResponse(refinedSystemPrompt, "My laptop screen is flickering. What should I do?");
  // const response2 = await getResponse(refinedSystemPrompt, "Can you help me track my recent order?");
  // console.log("Response 1:\n", response1);
  // console.log("\nResponse 2:\n", response2);
}

main();
