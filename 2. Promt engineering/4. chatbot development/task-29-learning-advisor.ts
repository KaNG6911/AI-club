/**
 * Task 29: Role-Playing -- Learning Advisor Chatbot
 * Chapter 4: Prompt Engineering for Chatbot Development
 *
 * Ном санал болгодог learning advisor chatbot бүтээ.
 * Role-playing system prompt + behavior & response guidelines.
 *
 * Зааварчилгаа:
 * 1. systemPrompt: learning advisor дүр -- background, experience, goals асуугаад
 *    beginner-аас advanced ном санал болгодог
 * 2. behaviorGuidelines: background/experience/goals байхгүй бол асуух
 * 3. responseGuidelines: 3-аас хэтрэхгүй ном санал болгох
 * 4. 2 query туршиж үзэ:
 *    - "I'm a beginner with marketing background, interested in Python and ML"
 *    - "Hey, I'm looking for courses on Python and data visualization."
 *
 * Ажиллуулах: npx tsx "4. Prompt Engineering for Chatbot Development/task-29-learning-advisor.ts"
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
  // TODO 1: Role-playing systemPrompt бич
  // Act as a learning advisor who recommends tailored book learning paths
  // const basePrompt = "...";

  // TODO 2: behaviorGuidelines -- background/experience/goals байхгүй бол асуух
  // const behaviorGuidelines = "...";

  // TODO 3: responseGuidelines -- max 3 ном, title + author + reason
  // const responseGuidelines = "...";

  // TODO 4: Нэгтгэ
  // const systemPrompt = basePrompt + "\n" + behaviorGuidelines + "\n" + responseGuidelines;

  // TODO 5: 2 query туршиж үзэ
  const userPrompt1 =
    "Hello! I'm a beginner with a marketing background, interested in Python, data analytics, and machine learning. Can you recommend some books?";
  const userPrompt2 =
    "Hey, I'm looking for courses on Python and data visualization. What do you recommend?";

  // console.log("=== QUERY 1 (with background) ===");
  // console.log(await getResponse(systemPrompt, userPrompt1));

  // console.log("\n=== QUERY 2 (without background) ===");
  // console.log(await getResponse(systemPrompt, userPrompt2));
  // Ажиглах: Query 2-т chatbot background асуух ёстой
}

main();
