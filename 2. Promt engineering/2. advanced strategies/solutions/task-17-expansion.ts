/** SOLUTION -- Task 17: Text Expansion */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.5,
  });
  return response.choices[0].message.content ?? "";
}

const bulletPoints = `- 4K Ultra HD camera with 130° wide-angle lens\n- AI-powered motion detection with instant alerts\n- Two-way audio with noise cancellation\n- Night vision up to 30ft (color)\n- Works with Alexa, Google Home, Apple HomeKit\n- 30-day free cloud storage included`;

async function main() {
  const prompt = `Expand the following product bullet points into a comprehensive one-paragraph description.
Include: unique features, customer benefits, and potential use cases.
Tone: professional but approachable.
Audience: tech-savvy homeowners.

Bullet points:
${bulletPoints}`;

  console.log("Original:\n", bulletPoints);
  console.log("\nExpanded:\n", await getResponse(prompt));
}
main();
