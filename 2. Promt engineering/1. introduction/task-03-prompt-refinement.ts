/**
 * Task 03: Prompt Refinement
 * Chapter 1: Introduction to Prompt Engineering Best Practices
 *
 * Ижил topic-ийг 2 өөр prompt-оор асуугаад хариуг харьцуул.
 * Тодорхой prompt хэрхэн илүү хэрэгтэй хариу өгдгийг ажиглаарай.
 *
 * Зааварчилгаа:
 * 1. vaguePrompt: "Write a poem about ChatGPT"
 * 2. specificPrompt: ижил topic-д -- audience, style, length, tone заасан prompt бич
 *    - Жишээ: 4 мөр, хүүхдэд ойлгомжтой, энгийн үг, найдлагатай дуусгах
 * 3. Хоёуланг ажиллуулж хариуг харьцуул
 *
 * Ажиллуулах: npx tsx "1. Introduction to Prompt Engineering Best Practices/task-03-prompt-refinement.ts"
 */

import OpenAI from "openai";

const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
  });
  return response.choices[0].message.content ?? "";
}

async function main() {
  // TODO 1: Vague prompt ажиллуул
  const vaguePrompt = "Write a poem about ChatGPT";
  const vagueResponse = await getResponse(vaguePrompt);
  console.log("=== VAGUE PROMPT ===");
  console.log(vagueResponse);

  // TODO 2: Specific prompt бич (audience, style, length, tone оруул)
  const specificPrompt = ""; // ← энд бич

  // TODO 3: Specific prompt ажиллуулж харьцуул
  // const specificResponse = await getResponse(specificPrompt);
  // console.log("\n=== SPECIFIC PROMPT ===");
  // console.log(specificResponse);
}

main();

// Бодох: Ямар нэмэлт мэдээлэл хамгийн их ялгаа гаргасан бэ?
