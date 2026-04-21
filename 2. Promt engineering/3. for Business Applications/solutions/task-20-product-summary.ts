/** SOLUTION -- Task 20: Product Summary */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }], temperature: 0 });
  return response.choices[0].message.content ?? "";
}

const productDescription = `The UltraBook Pro X1 features a 14-inch OLED display with 2880x1800 resolution and 120Hz refresh rate. Powered by 13th Gen Intel Core i9 with 32GB LPDDR5 RAM. 2TB NVMe SSD. 18-hour battery. Weighs 1.2kg. Thunderbolt 4, Wi-Fi 6E, fingerprint reader.`;

async function main() {
  const prompt = `Summarize the following product description in no more than 5 bullet points.\nEach bullet under 15 words. Focus on features that differentiate from competitors.\n\nDescription:\n${productDescription}`;
  console.log("Original:\n", productDescription, "\n\nSummarized:\n", await getResponse(prompt));
}
main();
