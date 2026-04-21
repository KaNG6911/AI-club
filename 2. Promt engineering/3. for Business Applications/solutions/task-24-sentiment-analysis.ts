/** SOLUTION -- Task 24: Sentiment Analysis & Entity Extraction */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }], temperature: 0 });
  return response.choices[0].message.content ?? "";
}

const reviews = ["This laptop is absolutely incredible — best purchase I've ever made!", "Terrible product. Stopped working after 2 days.", "It's okay. Does what it says, nothing more.", "Arrived damaged and customer support was unhelpful.", "Exactly as described. Happy with the purchase."];
const productDescription = "The Galaxy S25 Ultra features a 6.8-inch Dynamic AMOLED display, 200MP main camera with 10x optical zoom, 5000mAh battery with 45W fast charging, and weighs 229g. Powered by Snapdragon 8 Elite.";

async function main() {
  const reviewList = reviews.map((r, i) => `${i + 1}. "${r}"`).join("\n");
  const sentimentPrompt = `Classify the sentiment of each review as POSITIVE, NEGATIVE, or NEUTRAL.\nReturn one word per review, numbered.\n\nReviews:\n${reviewList}`;
  console.log("=== SENTIMENT ===\n", await getResponse(sentimentPrompt));

  const extractPrompt = `Extract product specifications from the description below.\nReturn in this format:\nName: ...\nDisplay: ...\nCamera: ...\nBattery: ...\nWeight: ...\n\nDescription: ${productDescription}`;
  console.log("\n=== ENTITY EXTRACTION ===\n", await getResponse(extractPrompt));
}
main();
