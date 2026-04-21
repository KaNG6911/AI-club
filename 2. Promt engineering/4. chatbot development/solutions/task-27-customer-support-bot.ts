/** SOLUTION -- Task 27: Customer Support Chatbot */
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

async function main() {
  const chatbotPurpose = "You are a customer support chatbot for an e-commerce company specializing in electronics. Your role is to assist customers with product inquiries, order tracking, and troubleshooting issues.";
  const audienceGuidelines = " The target audience consists of tech-savvy individuals interested in purchasing electronic gadgets.";
  const toneGuidelines = " Use a professional and user-friendly tone while interacting with customers. Be concise and helpful.";
  const systemPrompt = chatbotPurpose + audienceGuidelines + toneGuidelines;
  console.log(await getResponse(systemPrompt, "My new headphones aren't connecting to my device"));
}
main();
