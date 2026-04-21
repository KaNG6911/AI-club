/** SOLUTION -- Task 31: Context via System Prompt */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(systemPrompt: string, userPrompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userPrompt }],
    temperature: 0,
  });
  return response.choices[0].message.content ?? "";
}

const serviceDescription = `MyPersonalDelivery Service Information:\n- Same-day delivery for groceries, medications, and documents (order before 2pm)\n- Standard 2-day delivery for electronics, clothing, and accessories\n- Scheduled large-item delivery for furniture (48h advance booking required)\n- Delivery hours: Monday-Saturday, 8am-9pm\n- Service areas: Ulaanbaatar city center and districts 1-9\n- We do NOT deliver: hazardous materials, live animals, or fragile antiques\n- Contactless delivery available upon request\n- Real-time tracking via app or SMS`;

const queries = ["What benefits does MyPersonalDelivery offer?", "Can I get my laptop delivered today?", "Do you deliver to Khan-Uul district?"];

async function main() {
  const systemPrompt = "You are a customer service chatbot for MyPersonalDelivery. Answer queries based on the following service information:\n\n" + serviceDescription + "\n\nBe gentle and helpful in every response.";
  for (const query of queries) {
    console.log(`Q: ${query}\nA: ${await getResponse(systemPrompt, query)}\n`);
  }
}
main();
