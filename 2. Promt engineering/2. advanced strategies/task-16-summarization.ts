/**
 * Task 16: Text Summarization
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * Market research report болон product description-г товчил.
 * Focus area, format, урт зааж өгсөн prompt ашигла.
 *
 * Зааварчилгаа:
 * 1. summarizeReport(): report-г 5 өгүүлбэрт товчил
 *    - Focus: AI adoption болон data privacy
 * 2. summarizeProduct(): product description-г 5 bullet point-д товчил
 * 3. Хоёуланг ажиллуул
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-16-summarization.ts"
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
The global technology market is experiencing rapid transformation driven by artificial intelligence
and increasing data privacy concerns. AI adoption has surged 45% year-over-year, with companies
integrating machine learning into customer service, supply chain optimization, and product
development. However, consumers are becoming more privacy-conscious, with 73% citing data
security as a primary factor in purchasing decisions. Regulations like GDPR and CCPA are
reshaping how businesses collect and use customer data, forcing many to adopt privacy-first
strategies. Companies that balance AI innovation with transparent data practices are seeing
stronger customer loyalty and 28% higher retention rates. The intersection of AI capabilities
and privacy expectations is becoming a key competitive differentiator in the market.
`;

const productDescription = `
The UltraBook Pro X1 features a 14-inch OLED display with 2880x1800 resolution and 120Hz
refresh rate. Powered by the latest 13th Gen Intel Core i9 processor with 32GB LPDDR5 RAM,
it handles demanding tasks effortlessly. The 2TB NVMe SSD ensures lightning-fast storage
access. Battery life reaches up to 18 hours with the intelligent power management system.
The laptop weighs only 1.2kg, making it perfect for professionals on the go. It includes
Thunderbolt 4 ports, Wi-Fi 6E, and a fingerprint reader for secure biometric login.
`;

async function summarizeReport(): Promise<void> {
  // TODO: report-г 5 өгүүлбэрт товчло
  // Focus: AI adoption болон data privacy
  // Template literal ашиглаж report-г оруул

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("=== REPORT SUMMARY ===\n", response);
}

async function summarizeProduct(): Promise<void> {
  // TODO: productDescription-г 5 bullet point-д товчло
  // Competitor-ыг ялгах онцлогуудад focus хий

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("=== PRODUCT SUMMARY ===\n", response);
}

async function main() {
  await summarizeReport();
  await summarizeProduct();
}

main();
