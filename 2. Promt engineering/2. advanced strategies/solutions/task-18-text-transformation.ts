/** SOLUTION -- Task 18: Text Transformation */
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

const marketingMessage = "Introducing our latest collection of premium leather handbags — crafted for the modern professional who demands style without compromise.";
const sampleEmail = "hey! just wanted to let u know we got some sick new products lol. check em out or whatever, they're pretty cool i guess. hit us up if u want more info bye";
const userText = "i think ai is relly cool and gonna change evrything. its like super smart and can do lots of stuff. companies should definitely use it more or they gonna miss out big time.";

async function main() {
  console.log("=== TRANSLATION ===\n", await getResponse(`Translate to French, Spanish, and Japanese. Label each. Preserve marketing tone.\n\n${marketingMessage}`));
  console.log("\n=== TONE ADJUSTMENT ===\nBefore:\n", sampleEmail, "\nAfter:\n", await getResponse(`Rewrite this email with a professional, positive, user-centric tone:\n\n${sampleEmail}`));
  console.log("\n=== WRITING IMPROVEMENT ===\nBefore:\n", userText, "\nAfter:\n", await getResponse(`Step 1: Proofread (fix spelling/grammar, keep structure). Step 2: Adjust tone to formal and friendly.\n\nText:\n${userText}`));
}
main();
