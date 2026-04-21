/**
 * Task 19: Market Research Report Summarization
 * Chapter 3: Prompt Engineering for Business Applications
 *
 * Маркетингийн судалгааны тайланг AI болон data privacy-д focus хийж товчил.
 *
 * Зааварчилгаа:
 * 1. report-г template literal-аар prompt-д оруул
 * 2. 5 өгүүлбэрт товчилно
 * 3. Focus: AI болон data privacy-н нөлөө
 * 4. Audience: Цаг багатай C-level executive
 *
 * Ажиллуулах: npx tsx "3. Prompt Engineering for Business Applications/task-19-report-summarization.ts"
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

const report = `
The global technology market is experiencing rapid transformation driven by artificial
intelligence and increasing data privacy concerns. AI adoption has surged 45% year-over-year,
with companies integrating machine learning into customer service, supply chain optimization,
and product development. However, consumers are becoming more privacy-conscious, with 73%
citing data security as a primary factor in purchasing decisions. Regulations like GDPR and
CCPA are reshaping how businesses collect and use customer data, forcing many to adopt
privacy-first strategies. Companies that balance AI innovation with transparent data practices
are seeing stronger customer loyalty and 28% higher retention rates. The intersection of AI
capabilities and privacy expectations is becoming a key competitive differentiator in the
market. Early adopters of AI with strong privacy frameworks report 35% faster decision-making
and significantly improved customer satisfaction scores across all demographics.
`;

async function main() {
  // TODO: report-г товчлох prompt бич
  // - Template literal ашиглаж report оруул
  // - 5 өгүүлбэрээс хэтрэхгүй
  // - AI adoption болон data privacy-д focus хий
  // - Audience: C-level executive

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("Summarized report:\n", response);
}

main();
