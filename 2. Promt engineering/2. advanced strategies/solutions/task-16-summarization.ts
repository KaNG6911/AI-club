/** SOLUTION -- Task 16: Summarization */
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

const report = `The global technology market is experiencing rapid transformation driven by artificial intelligence and increasing data privacy concerns. AI adoption has surged 45% year-over-year. However, consumers are becoming more privacy-conscious, with 73% citing data security as a primary factor in purchasing decisions. Regulations like GDPR and CCPA are reshaping how businesses collect and use customer data. Companies that balance AI innovation with transparent data practices are seeing stronger customer loyalty and 28% higher retention rates.`;

const productDescription = `The UltraBook Pro X1 features a 14-inch OLED display with 2880x1800 resolution and 120Hz refresh rate. Powered by 13th Gen Intel Core i9 with 32GB RAM. 2TB NVMe SSD. 18-hour battery life. Weighs 1.2kg. Two Thunderbolt 4 ports, Wi-Fi 6E, fingerprint reader.`;

async function main() {
  const reportPrompt = `Summarize the following market research report in no more than 5 sentences.\nFocus specifically on AI adoption and data privacy impact.\n\nReport:\n${report}`;
  console.log("=== REPORT SUMMARY ===\n", await getResponse(reportPrompt));

  const productPrompt = `Summarize the following product description in no more than 5 bullet points. Each bullet under 15 words. Focus on differentiating features.\n\nDescription:\n${productDescription}`;
  console.log("\n=== PRODUCT SUMMARY ===\n", await getResponse(productPrompt));
}
main();
