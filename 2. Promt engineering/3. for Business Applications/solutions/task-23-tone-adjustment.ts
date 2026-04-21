/** SOLUTION -- Task 23: Tone Adjustment */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }], temperature: 0 });
  return response.choices[0].message.content ?? "";
}

const sampleEmail = "hey! just wanted to let u know we got some sick new products lol. check em out or whatever, they're pretty cool i guess. u can get 20% off if u order before friday. hit us up if u want more info bye";
const userReview = "i think this phone is relly good but the bateery life could be better. its like super fast and the camra is amazin. definately reccomend to anyone who wants a good phone for the price.";

async function main() {
  console.log("=== EMAIL TONE ===\nBefore:\n", sampleEmail, "\nAfter:\n", await getResponse(`Rewrite with professional, positive, user-centric tone:\n\n${sampleEmail}`));
  console.log("\n=== WRITING IMPROVEMENT ===\nBefore:\n", userReview, "\nAfter:\n", await getResponse(`Step 1: Proofread (fix spelling/grammar, keep structure). Step 2: Adjust tone to formal and friendly.\n\n${userReview}`));
}
main();
