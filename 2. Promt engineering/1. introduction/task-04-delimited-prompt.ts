/**
 * Task 04: Delimited Prompt with Template Literals
 * Chapter 1: Introduction to Prompt Engineering Best Practices
 *
 * Story completion task. Template literal + triple backtick delimiter ашиглана.
 *
 * Зааварчилгаа:
 * 1. story variable-г template literal-аар prompt-д оруул
 * 2. Triple backtick (```) delimiter-оор story-г тусгаарла
 * 3. Prompt: story-г 2 paragraph-д дуусга, Shakespeare-ийн хэлбэрт
 * 4. Оригинал болон үргэлжлэлийг хоёуланг нь хэвлэ
 *
 * Ажиллуулах: npx tsx "1. Introduction to Prompt Engineering Best Practices/task-04-delimited-prompt.ts"
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

const story =
  "Once upon a time, a small robot found a glowing seed in the middle of a digital forest...";

async function main() {
  // TODO: Prompt бич
  // - story-г template literal-аар оруул
  // - Triple backtick delimiter ашигла
  // - 2 paragraph, Shakespeare хэлбэр гэж зааж өг

  // const prompt = `...${story}...`;

  // const response = await getResponse(prompt);

  console.log("Original story:\n", story);
  // console.log("\nContinuation:\n", response);
}

main();
