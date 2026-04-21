/**
 * Task 22: Multilingual Translation
 * Chapter 3: Prompt Engineering for Business Applications
 *
 * Marketing message-г олон хэлрүү орчуул.
 * Маркетингийн tone болон excitement-г хадгал.
 *
 * Зааварчилгаа:
 * 1. marketingMessage-г French, Spanish, Japanese-рүү орчуул
 * 2. Маркетингийн tone хадгалахыг зааж өг
 * 3. Орчуулга бүрийг тодорхой label хий
 *
 * Ажиллуулах: npx tsx "3. Prompt Engineering for Business Applications/task-22-multilingual-translation.ts"
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

const marketingMessage =
  "Introducing our latest collection of premium leather handbags — " +
  "crafted for the modern professional who demands elegance, durability, " +
  "and style without compromise. Elevate your everyday look today.";

async function main() {
  // TODO: marketingMessage-г template literal-аар оруулж орчуулах prompt бич
  // - French, Spanish, Japanese
  // - Marketing tone хадгал
  // - Орчуулга бүрийг label хий

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("English:\n", marketingMessage);
  // console.log("\nTranslations:\n", response);
}

main();
