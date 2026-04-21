/**
 * Bonus 2: Custom AI Assistant
 *
 * System message, guardrails, few-shot examples бүгдийг нэгтгэж,
 * өөрийн сонирхолтой domain /зорилтот, хамрах хүрээ/-д AI assistant бүтээ.
 *
 * Жишээ нь:
 * - Монгол хоол зөвлөдөг assistant
 * - Code review хийдэг assistant
 * - Gym дасгалын төлөвлөгөө гаргадаг assistant
 *
 * Зааварчилгаа:
 * 1. Өөрийн сонгосон domain-д тохирсон system message бич (+ guardrail)
 * 2. Few-shot жишээ нэм (user-assistant pair)
 * 3. Bonus 1-ийн адил interactive loop ажиллуул (max_completion_tokens: 200, temperature: 0.7)
 *
 * Ажиллуулах: npx tsx bonus-02-custom-assistant.ts
 */

import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import * as readline from "readline";

const client = new OpenAI();

async function main() {
  // TODO 1: Өөрийн domain-д тохируулж system message + few-shot жишээ бич
  const messages: ChatCompletionMessageParam[] = [
    // { role: "system", content: `...` },
    // { role: "user", content: "..." },        // few-shot жишээний асуулт
    // { role: "assistant", content: "..." },   // few-shot жишээний хариу
  ];

  // TODO 2: readline interface + ask() helper бүтээ
  // const rl = readline.createInterface({ ... });
  // const ask = (prompt: string): Promise<string> => ...;

  console.log('Custom AI Assistant бэлэн! ("quit" гэж бичвэл гарна)\n');

  // TODO 3: while(true) chat loop (max_completion_tokens: 200, temperature: 0.7)
  // ...
}

main();

// Өөрийн assistant-г бүтээхдээ:
// 1. System message-г domain-даа тохируул
// 2. Guardrails нэм (юу хийхгүй вэ)
// 3. Few-shot жишээ user-assistant pair-ээр нэм
// 4. Temperature-г тохируул (factual=0, creative=1+)
