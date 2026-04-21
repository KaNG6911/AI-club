/**
 * Task 18: Text Transformation
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * 3 өөр transformation хийнэ:
 *   A) Олон хэлрүү орчуулга
 *   B) Email-ийн tone-г professional болгох
 *   C) Бичих чанарыг сайжруулах (multi-step)
 *
 * Зааварчилгаа:
 * Функц бүрийг дуусга -- prompt-г template literal-аар бич
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-18-text-transformation.ts"
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
  "crafted for the modern professional who demands style without compromise.";

const sampleEmail =
  "hey! just wanted to let u know we got some sick new products lol. " +
  "check em out or whatever, they're pretty cool i guess. " +
  "hit us up if u want more info bye";

const userText =
  "i think ai is relly cool and gonna change evrything. " +
  "its like super smart and can do lots of stuff. " +
  "companies should definitely use it more or they gonna miss out big time.";

async function translateMessage(): Promise<void> {
  // TODO: marketingMessage-г French, Spanish, Japanese-рүү орчуул
  // Label each translation clearly

  // const prompt = `...`;
  // console.log("=== TRANSLATION ===\n", await getResponse(prompt));
}

async function adjustTone(): Promise<void> {
  // TODO: sampleEmail-ийн tone-г professional, positive, user-centric болгох

  // const prompt = `...`;
  // console.log("\n=== TONE ADJUSTMENT ===");
  // console.log("Before:\n", sampleEmail);
  // console.log("After:\n", await getResponse(prompt));
}

async function improveWriting(): Promise<void> {
  // TODO: Multi-step prompt:
  // Step 1: Proofread (spelling/grammar fix, structure хадгалах)
  // Step 2: Adjust tone to formal and friendly

  // const prompt = `...`;
  // console.log("\n=== WRITING IMPROVEMENT ===");
  // console.log("Before:\n", userText);
  // console.log("After:\n", await getResponse(prompt));
}

async function main() {
  await translateMessage();
  await adjustTone();
  await improveWriting();
}

main();
