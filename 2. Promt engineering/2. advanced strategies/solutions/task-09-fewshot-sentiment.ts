/** SOLUTION -- Task 09: Few-Shot Sentiment Analysis */
import OpenAI from "openai";
const client = new OpenAI();

async function main() {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a customer review classifier. Return only the number: 1 for positive, -1 for negative, 0 for neutral." },
      { role: "user", content: "The product quality exceeded my expectations" },
      { role: "assistant", content: "1" },
      { role: "user", content: "I had a terrible experience with this product's customer service" },
      { role: "assistant", content: "-1" },
      { role: "user", content: "The price of the product is really fair given its features." },
    ],
    temperature: 0,
  });
  console.log(response.choices[0].message.content);
}
main();
