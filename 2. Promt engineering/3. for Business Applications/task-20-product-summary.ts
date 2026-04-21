/**
 * Task 20: Product Features Summarization
 * Chapter 3: Prompt Engineering for Business Applications
 *
 * Бүтээгдэхүүний тайлбарыг 5 bullet point-д товчил.
 * E-commerce website-д харуулах concise summary бэлдэнэ.
 *
 * Зааварчилгаа:
 * 1. 5 bullet point-оос хэтрэхгүй
 * 2. Bullet point бүр 15 үгнээс хэтрэхгүй
 * 3. Competitor-ыг ялгах онцлогуудад focus хий
 * 4. Original болон summary хоёуланг хэвлэ
 *
 * Ажиллуулах: npx tsx "3. Prompt Engineering for Business Applications/task-20-product-summary.ts"
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

const productDescription = `
The UltraBook Pro X1 features a 14-inch OLED display with 2880x1800 resolution and 120Hz
refresh rate for incredibly sharp, fluid visuals. Powered by the latest 13th Gen Intel Core
i9 processor with 32GB LPDDR5 RAM, it handles demanding tasks like video editing and 3D
rendering effortlessly. The 2TB NVMe SSD with read speeds up to 7400MB/s ensures lightning-fast
storage access. Battery life reaches up to 18 hours with the intelligent power management
system that learns your usage patterns. The laptop weighs only 1.2kg with a slim 13.9mm
profile, making it perfect for professionals on the go. Connectivity includes two Thunderbolt 4
ports, USB-A 3.2, HDMI 2.1, Wi-Fi 6E, and Bluetooth 5.3. Security features include a
fingerprint reader and IR camera for Windows Hello facial recognition.
`;

async function main() {
  // TODO: productDescription-г 5 bullet point-д товчлох prompt бич
  // - Template literal ашиглаж productDescription оруул
  // - 5 bullet point хязгаар
  // - Competitor-ыг ялгах features-д focus

  // const prompt = `...`;
  // const response = await getResponse(prompt);

  console.log("Original description:\n", productDescription);
  // console.log("\nSummarized:\n", response);
}

main();
