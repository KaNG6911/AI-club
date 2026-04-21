/** SOLUTION -- Task 30: Context via Sample Conversations */
import OpenAI from "openai";
const client = new OpenAI();

const contextQuestion = "What types of items can be delivered using MyPersonalDelivery?";
const contextAnswer = "We deliver everything from everyday essentials such as groceries, medications, and documents to larger items like electronics, clothing, and furniture. However, we do not offer delivery for hazardous materials or extremely fragile items requiring special handling.";

async function main() {
  const systemPrompt = "You are a helpful and gentle customer service chatbot for MyPersonalDelivery, a delivery service company.";
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: contextQuestion },
      { role: "assistant", content: contextAnswer },
      { role: "user", content: "Do you deliver furniture?" },
    ],
    temperature: 0,
  });
  console.log(response.choices[0].message.content);
}
main();
