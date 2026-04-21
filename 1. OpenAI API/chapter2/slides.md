---
marp: true
theme: default
paginate: true
header: "AI Club"
footer: ""
style: |
  section {
    font-family: 'Inter', 'Helvetica Neue', sans-serif;
  }
  section.lead {
    text-align: center;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: white;
  }
  section.lead h1 {
    color: #38bdf8;
    font-size: 2.8em;
  }
  section.lead h2 {
    color: #94a3b8;
  }
  code {
    background: #f1f5f9;
    border-radius: 4px;
    padding: 2px 6px;
  }
  pre {
    background: #f8fafc !important;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  }
  pre code {
    color: #1e293b !important;
    background: transparent;
  }
  strong { color: #0ea5e9; }
  table { font-size: 0.85em; }
---

<!-- _class: lead -->

# Prompt Engineering & Parameters

## Chapter 2: Text Operations, Tokens & Cost

AI Club | 2026

---

# Text Editing with AI

**AI text editing:** semantic intent ойлгодог -- нэр, контекст бүгдийг зэрэг шинэчилнэ

```typescript
const prompt = `Update this bio:
- Name: "Bat" → "Dulguun", pronouns: she/her
- Role: "Junior Developer" → "Senior Engineer"

Bat is a Junior Developer at TechCo. He builds 
web apps with React.`;
```

**Result:** _Dulguun is a Senior Engineer at TechCo. She builds web apps with React._

---

# Text Summarization

```typescript
const article = `...long article about AI trends...`;

const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "user",
      content: `Summarize into two bullet points:\n${article}`,
    },
  ],
  max_completion_tokens: 400,
});
```

`` `${variable}` `` -- template literal-аар dynamic data-г prompt-д оруулна

---

# Controlling Response Length

## `max_completion_tokens`

| Setting                      | Result                                                       |
| ---------------------------- | ------------------------------------------------------------ |
| `max_completion_tokens: 10`  | `"TypeScript is a typed super"` -- ТАСАРСАН                  |
| `max_completion_tokens: 100` | `"TypeScript is a typed superset of JavaScript..."` -- бүрэн |

- **Hard cutoff** -- model зогсдог, suggestion биш
- Хэт бага = тасарсан хариу
- Хэт их = шаардлагагүй мөнгө төлнө

---

# What Are Tokens?

**Token = model-ийн "бодлогын нэгж"**

| Text                      | Tokens    |
| ------------------------- | --------- |
| `Hello`                   | 1 token   |
| `Hello, world!`           | 3 tokens  |
| `Artificial Intelligence` | 2 tokens  |
| `Сайн байна уу`           | ~8 tokens |

**Rule of thumb (English):**

- 1 token ≈ 4 characters ≈ ¾ word
- 100 tokens ≈ 75 words

**Mongolian:** Кирилл үсэг нь илүү олон token шаарддаг!

> Tokenizer tool: https://platform.openai.com/tokenizer

---

# API Cost Calculation

**Model бүр өөр үнэтэй. Input ≠ Output үнэ**

```
gpt-4o-mini:
  Input:  $0.15 / 1M tokens
  Output: $0.60 / 1M tokens
```

```typescript
// Response-оос token тоо авах:
const { prompt_tokens, completion_tokens } = response.usage;

const inputCost = prompt_tokens * (0.15 / 1_000_000);
const outputCost = completion_tokens * (0.6 / 1_000_000);
const totalCost = inputCost + outputCost;

console.log(`Cost: $${totalCost.toFixed(6)}`);
```

**Product хийхэд зардлаа тооцоолох чухал!**

---

# Temperature -- Controlling Randomness

| Temperature | Behavior           | Use Case                   |
| ----------- | ------------------ | -------------------------- |
| **0**       | Deterministic      | Classification, extraction |
| **0.7 - 1** | Balanced (default) | General Q&A, chat          |
| **1 - 1.5** | Creative           | Writing, brainstorming     |
| **2**       | Highly random      | Experimental only          |

```typescript
{
  temperature: 0;
} // always same output
{
  temperature: 1;
} // balanced
{
  temperature: 2;
} // chaotic, creative
```

---

# Text Generation Example

```typescript
const prompt = `Write a product description for 
wireless earbuds with:
- Active noise cancellation
- 30-hour battery life  
- Water resistant (IPX5)

Target audience: fitness enthusiasts.
Tone: energetic and motivating.`;

const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: prompt }],
  max_completion_tokens: 150,
  temperature: 1,
});
```

**Prompt structure:** Features + Audience + Tone = сайн output

---

<!-- _class: lead -->

# Shot Prompting

## The most impactful prompt engineering technique

---

# Zero-shot Prompting

**Жишээ өгөхгүйгээр**, зөвхөн instruction:

```typescript
const prompt = `Classify sentiment (1-5, negative to positive):
- "Unbelievably good!"
- "Broke after two days."
- "Looks nice, but not comfortable."
- "Can't wait to wear them!"`;
```

**Problem:**

- Format inconsistent
- Ambiguous review-г буруу classify хийж болно
- Run бүрт өөр хариу

---

# One-shot Prompting

**1 жишээ** нэмэхэд format сайжирна:

```typescript
const prompt = `Classify sentiment (1-5, negative to positive):
Love these! = 5
"Unbelievably good!" = 
"Broke after two days." = 
"Looks nice, but not comfortable." = 
"Can't wait to wear them!" = `;
```

**Result:** Format consistent болж эхэлнэ
**But:** Moderate review-г зөв classify хийж чадахгүй байж болно

---

# Few-shot Prompting

**2+ жишээ** -- edge case-д зориулсан жишээ нэмэх:

```typescript
const prompt = `Classify sentiment (1-5, negative to positive):
Love these! = 5
Decent quality, nothing special = 3
"Unbelievably good!" = 
"Broke after two days." = 
"Looks nice, but not comfortable." = 
"Can't wait to wear them!" = `;
```

**Key insight:**

- **Moderate жишээ** (= 3) нэмснээр ambiguous review зөв болно
- Classification space-ийн **EDGE** дээрх жишээ хамгийн чухал!

---

# Shot Prompting -- Summary

```
Zero-shot:  Instruction only     → Inconsistent
One-shot:   + 1 example          → Better formatting
Few-shot:   + 2-3 examples       → Most reliable
```

**Хэзээ юу хэрэглэх:**

| Technique | Use Case                                              |
| --------- | ----------------------------------------------------- |
| Zero-shot | Энгийн Q&A, translation                               |
| One-shot  | Format харуулах хэрэгтэй үед                          |
| Few-shot  | Classification, structured output, **production app** |

> Хэдэн token нэмэхэд output чанар **асар их** сайжирдаг

---

<!-- _class: lead -->

# Hands-On Time

## Tasks 2-7

Text operations, temperature experiment, shot prompting progression
