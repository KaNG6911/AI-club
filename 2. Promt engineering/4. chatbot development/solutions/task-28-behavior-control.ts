/** SOLUTION -- Task 28: Behavior Control */
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

const baseSystemPrompt = "You are a customer support chatbot for an e-commerce company specializing in electronics. Assist with product inquiries, order tracking, and troubleshooting. Use a professional and user-friendly tone.";

async function main() {
  const orderNumberCondition = " If a user asks about an order but does not provide an order number, politely ask them to provide their order number before proceeding.";
  const technicalIssueCondition = " If a user reports a technical issue, begin your response with: 'I'm sorry to hear about your issue with [product/feature].' Then provide troubleshooting steps.";
  const refinedSystemPrompt = baseSystemPrompt + orderNumberCondition + technicalIssueCondition;

  console.log("Response 1:\n", await getResponse(refinedSystemPrompt, "My laptop screen is flickering. What should I do?"));
  console.log("\nResponse 2:\n", await getResponse(refinedSystemPrompt, "Can you help me track my recent order?"));
}
main();
