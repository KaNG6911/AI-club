/**
 * Task 17: Text Expansion
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * Товч bullet point жагсаалтыг дэлгэрэнгүй бүтээгдэхүүний тайлбар болгох.
 *
 * Зааварчилгаа:
 * 1. Prompt бич:
 *    - bulletPoints-г нэг дэлгэрэнгүй paragraph болгон өргөжүүл
 *    - Онцлог шинж чанар, ашиг тус, хэрэглэх боломж оруул
 *    - Tone: professional but approachable
 *    - Audience: tech-savvy homeowners
 * 2. Original болон expanded хоёуланг хэвлэ
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-17-expansion.ts"
 */

import OpenAI from "openai";

const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.5,
  });
  return response.choices[0].message.content ?? "";
}

const bulletPoints = `
- 4K Ultra HD camera with 130° wide-angle lens
- AI-powered motion detection with instant alerts
- Two-way audio with noise cancellation
- Night vision up to 30ft (color night vision)
- Works with Alexa, Google Home, and Apple HomeKit
- 30-day free cloud storage included
`;

async function main() {
  // TODO: bulletPoints-г template literal-аар оруулж expansion prompt бич
  // - 1 paragraph
  // - Unique features + benefits + potential applications
  // - Professional but approachable tone
  // - Audience: tech-savvy homeowners

  // const prompt = `...`;
  // const response = await getResponse(prompt);

  console.log("Original bullet points:\n", bulletPoints);
  // console.log("\nExpanded description:\n", response);
}

main();
