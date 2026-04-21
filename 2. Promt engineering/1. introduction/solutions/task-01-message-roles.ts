/** SOLUTION -- Task 01: Message Roles */
import OpenAI from "openai";
const client = new OpenAI();

async function main() {
  const conversationMessages = [
    { role: "system" as const, content: "You are a helpful event management assistant." },
    { role: "user" as const, content: "What are some good conversation starters at networking events?" },
    { role: "assistant" as const, content: "The easiest way to get to know each other directly is to ask open-ended questions about their work and interests." },
  ];

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: conversationMessages,
  });
  console.log(response.choices[0].message.content);
}
main();
