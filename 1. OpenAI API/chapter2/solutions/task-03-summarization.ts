/**
 * SOLUTION -- Task 3: Text Summarization
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const financeText = `The stock market experienced a significant downturn last quarter,
  with major indices dropping by an average of 15%.
  Analysts attribute this decline to rising interest rates,
  geopolitical tensions, and slowing consumer spending. Despite the downturn,
  some sectors like energy and healthcare showed resilience. Investors are now cautiously
  optimistic about the upcoming quarter, with expectations of stabilizing inflation and potential rate cuts.
  Financial advisors recommend diversifying portfolios and maintaining
  a long-term investment strategy during periods of market volatility.`;

  const prompt = `Summarize the following text into two concise bullet points:
${financeText}`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    max_completion_tokens: 400,
  });

  console.log(response.choices[0].message.content);
}

main();
