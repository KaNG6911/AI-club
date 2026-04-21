/** SOLUTION -- Task 21: Product Expansion */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }], temperature: 0.5 });
  return response.choices[0].message.content ?? "";
}

const productDescription = `- 4K Ultra HD camera, 130° wide-angle lens\n- AI-powered motion detection with instant smartphone alerts\n- Two-way audio with noise cancellation\n- Color night vision up to 30ft\n- Compatible with Alexa, Google Home, Apple HomeKit\n- 30-day free cloud storage + local microSD option`;

async function main() {
  const prompt = `Expand the following product bullet points into a comprehensive one-paragraph description.\nHighlight: unique features, benefits, and potential use cases.\nTone: professional but approachable. Audience: tech-savvy homeowners.\n\nBullet points:\n${productDescription}`;
  console.log("Original:\n", productDescription, "\n\nExpanded:\n", await getResponse(prompt));
}
main();
