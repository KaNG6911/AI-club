/**
 * Task 15: Iterative Prompt Refinement
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * Initial prompt-г давтан сайжруулж хүссэн output авах.
 * Top 10 language model-уудыг хүснэгт хэлбэрт гаргуул.
 *
 * Зааварчилгаа:
 * 1. initialPrompt: "Give me the top 10 pre-trained language models"
 * 2. refinedPrompt: model name, release year, owning company-г
 *    3 bagana бүхий хүснэгтэд гаргуулахаар сайжруул
 * 3. Хоёр хариуг харьцуул
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-15-iterative-refinement.ts"
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
  // Initial prompt
  const initialPrompt = "Give me the top 10 pre-trained language models";
  const initialResponse = await getResponse(initialPrompt);
  console.log("=== INITIAL PROMPT ===\n", initialResponse);

  // TODO: Refined prompt -- 3 bagana хүснэгтэд (Model Name, Release Year, Company)
  // const refinedPrompt = `...`;
  // const refinedResponse = await getResponse(refinedPrompt);
  // console.log("\n=== REFINED PROMPT ===\n", refinedResponse);
}

main();
