/**
 * Task 21: Product Description Expansion
 * Chapter 3: Prompt Engineering for Business Applications
 *
 * Товч bullet point жагсаалтыг дэлгэрэнгүй бүтээгдэхүүний тайлбар болгох.
 * Smart home security camera-ийн bullet point-ыг өргөжүүл.
 *
 * Зааварчилгаа:
 * 1. 1 paragraph дэлгэрэнгүй тайлбар
 * 2. Unique features, benefits, potential applications оруул
 * 3. Tone: professional, approachable
 * 4. Audience: tech-savvy homeowners
 *
 * Ажиллуулах: npx tsx "3. Prompt Engineering for Business Applications/task-21-product-expansion.ts"
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

const productDescription = `
- 4K Ultra HD camera, 130° wide-angle lens
- AI-powered motion detection with instant smartphone alerts
- Two-way audio with noise cancellation
- Color night vision up to 30ft
- Compatible with Alexa, Google Home, Apple HomeKit
- 30-day free cloud storage + local microSD option
`;

async function main() {
  // TODO: productDescription-г дэлгэрэнгүй 1 paragraph болгон өргөжүүлэх prompt бич
  // - Unique features, benefits, potential applications
  // - Professional but approachable tone
  // - Audience: tech-savvy homeowners
  // - Template literal ашиглаж productDescription оруул

  // const prompt = `...`;
  // const response = await getResponse(prompt);

  console.log("Original bullet points:\n", productDescription);
  // console.log("\nExpanded description:\n", response);
}

main();
