/**
 * Task 31: External Context via System Prompt
 * Chapter 4: Prompt Engineering for Chatbot Development
 *
 * Company-specific мэдээллийг system prompt-д inject хий.
 * Sample conversation-аас илүү энгийн бөгөөд scalable арга.
 *
 * Зааварчилгаа:
 * 1. systemPrompt: chatbot purpose + serviceDescription-г оруул
 * 2. getResponse(systemPrompt, userPrompt) ашиглаж хариу авна
 * 3. 3 query туршиж үзэ
 *
 * Ажиллуулах: npx tsx "4. Prompt Engineering for Chatbot Development/task-31-context-system-prompt.ts"
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

const serviceDescription = `
MyPersonalDelivery Service Information:
- Same-day delivery available for groceries, medications, and documents (order before 2pm)
- Standard 2-day delivery for electronics, clothing, and accessories
- Scheduled large-item delivery for furniture (requires booking 48h in advance)
- Delivery hours: Monday-Saturday, 8am-9pm
- Service areas: Ulaanbaatar city center and districts 1-9
- We do NOT deliver: hazardous materials, live animals, or extremely fragile antiques
- Contactless delivery available upon request
- Real-time tracking available via app or SMS
`;

const queries = [
  "What benefits does MyPersonalDelivery offer?",
  "Can I get my laptop delivered today?",
  "Do you deliver to Khan-Uul district?",
];

async function main() {
  // TODO: systemPrompt бич -- chatbot purpose + serviceDescription оруул
  // const systemPrompt = "You are a customer service chatbot for MyPersonalDelivery. " +
  //   "Answer queries based on the following service information:\n\n" + serviceDescription + "\n\n" +
  //   "Be gentle and helpful in every response.";

  for (const query of queries) {
    console.log(`Q: ${query}`);
    // const response = await getResponse(systemPrompt, query);
    // console.log(`A: ${response}\n`);
  }
}

main();

// Бодох: serviceDescription нь database query эсвэл API call-аас ирж болно.
// Production-д яаж implement хийх вэ?
