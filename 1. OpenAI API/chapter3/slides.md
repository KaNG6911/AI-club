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

# Roles, Guardrails & Multi-Turn

## Chapter 3: Building Real AI Features

AI Club | 2026

---

# Single-Turn vs Multi-Turn

**Single-turn:** 1 prompt → 1 response (бидний хийсэн бүх зүйл)

```
User: "What is TypeScript?"  →  Assistant: "TypeScript is..."
```

**Multi-turn:** Өмнөх яриан дээр суурилж үргэлжлүүлэх

```
User: "What is TypeScript?"    →  Assistant: "TypeScript is..."
User: "Compare it with Go."   →  Assistant: "Compared to
                                    TypeScript, Go is..."
```

> ChatGPT, customer support bot, Copilot -- бүгд multi-turn

---

# The Three Roles

```
┌─────────────────────────────────────────────┐
│  SYSTEM   │  Assistant-ийн зан байдал,      │
│  (нууц)   │  дүрэм, хязгаарлалт тодорхойлно │
├─────────────────────────────────────────────┤
│  USER     │  Хэрэглэгчийн асуулт,           │
│           │  instruction                    │
├─────────────────────────────────────────────┤
│  ASSISTANT│  Model-ийн хариу.               │
│           │  Developer ч бичиж болно        │
│           │  (жишээ болгон)                 │
└─────────────────────────────────────────────┘
```

**System = AI feature-ийн CONSTITUTION**

---

# System Message -- Before & After

**System message-гүй:** → Урт, ерөнхий тайлбар

**System message-тэй:** → Товч, code жишээтэй хариу

```typescript
messages: [
  {
    role: "system",
    content:
      "You are a TypeScript tutor. " + "Explain concisely with code examples.",
  },
  { role: "user", content: "Explain async/await" },
];
```

System message нь хариуны **стиль, урт, чиглэлийг** тодорхойлно

---

# System Message in Next.js

```typescript
// app/api/chat/route.ts
export async function POST(req: Request) {
  const { message } = await req.json();
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: message },
    ],
  });
  return Response.json({ reply: response.choices[0].message.content });
}
```

**System message-г SERVER SIDE-д тавь, user-д expose хийхгүй**

---

# Guardrails -- Protecting Your AI

**Guardrails** = model-ийн output-д тавих хязгаарлалт

```typescript
const systemMsg = `You are a fitness coaching assistant.
You help users create workout plans and nutrition advice.

RESTRICTIONS:
- Do NOT provide medical diagnoses or treatment advice
- Do NOT recommend specific supplements or medications
- If asked about medical topics, respond:
  "I'm a fitness coach, not a doctor. Please consult 
   a healthcare professional for medical advice."`;
```

> Product хийхэд guardrails **OPTIONAL БИШ**
> User болон business-ийг хамгаална

---

# Guardrails in Action

```typescript
// User: "I have chest pain during workouts, what medicine should I take?"

messages: [
  { role: "system", content: systemMsg },
  {
    role: "user",
    content:
      "I have chest pain during workouts, " + "what medicine should I take?",
  },
];

// Output: "I'm a fitness coach, not a doctor.
// Please consult a healthcare professional for
// medical advice. Chest pain during exercise should
// be evaluated by a medical professional immediately."
```

**Challenge:** Guardrail-аа эвдэж чадах уу? Prompt injection туршилт!

---

# Assistant Role -- Providing Examples

**User-Assistant pair** = structured few-shot prompting

```typescript
messages: [
  { role: "system", content: "Concise geography tutor." },
  // Example pair (developer бичсэн)
  { role: "user", content: "Tell me about Mongolia." },
  {
    role: "assistant",
    content:
      "Mongolia is a landlocked " +
      "country in East Asia. The capital is Ulaanbaatar.",
  },
  // Actual question
  { role: "user", content: "Tell me about Japan." },
];
```

Assistant message = **"fake conversation history"**

---

# When to Use Each Role

| Placement                | Use Case                                       |
| ------------------------ | ---------------------------------------------- |
| **System message**       | Personality, restrictions, output format rules |
| **User-Assistant pairs** | Style/tone/format examples                     |
| **User message**         | Actual request + contextual data               |

```typescript
messages: [
  { role: "system", content: "..." }, // Rules
  { role: "user", content: "Example Q" }, // Example
  { role: "assistant", content: "Ideal A" }, // Example
  { role: "user", content: "Real question" }, // Actual
];
```

---

<!-- _class: lead -->

# Multi-Turn Conversations

## Model-д memory БАЙХГҮЙ

---

# The Key Insight

**Model нэг ч зүйл санахгүй.** API call бүрт БҮТЭН conversation history илгээдэг.

```typescript
// Turn 1
messages = [
  { role: "system", content: "You are a math tutor." },
  { role: "user", content: "What is pi?" }
]
→ Response: "Pi is approximately 3.14159..."

// Turn 2: БҮТЭН history + шинэ асуулт
messages = [
  { role: "system", content: "You are a math tutor." },
  { role: "user", content: "What is pi?" },
  { role: "assistant", content: "Pi is approximately 3.14159..." },
  { role: "user", content: "Summarize in one sentence." }
]
→ Model "this"-г ойлгодог, учир нь бүх яриаг уншдаг
```

---

# The Multi-Turn Pattern

```typescript
const messages: ChatCompletionMessageParam[] = [
  { role: "system", content: "You are a helpful assistant." },
];

const userQuestions = [
  "What is recursion?",
  "Give me a TypeScript example.",
  "Now explain it to a 5-year-old.",
];

for (const question of userQuestions) {
  messages.push({ role: "user", content: question });

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages, // FULL history every time
  });

  const reply = response.choices[0].message.content ?? "";
  messages.push({ role: "assistant", content: reply });
}
```

---

# Cost Implications

```
Turn 1:  system + user1                    →  ~50 tokens
Turn 2:  system + user1 + asst1 + user2    → ~150 tokens
Turn 3:  system + user1 + asst1 + user2 + asst2 + user3 → ~300 tokens
...
Turn 10: EVERYTHING from turn 1-9 + user10 → ~2000+ tokens
```

**Token cost = conversation урттай хамт ӨСДӨГ!**

**Production tips:**

- Conversation limit тавих (max 20 turns гэх мэт)
- Хуучин message-г summarize хийж token хэмнэх
- System message-г аль болох товч байлгах

---

# Building a Real Chatbot

```typescript
import * as readline from "readline";

const messages: ChatCompletionMessageParam[] = [
  { role: "system", content: "You are a helpful assistant." },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

while (true) {
  const input = await ask("You: ");
  if (input === "quit") break;

  messages.push({ role: "user", content: input });
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
  });
  const reply = response.choices[0].message.content ?? "";
  messages.push({ role: "assistant", content: reply });
  console.log(`Assistant: ${reply}\n`);
}
```

---

# Day 1 Recap

| #   | Concept            | Key Takeaway                                       |
| --- | ------------------ | -------------------------------------------------- |
| 1   | **API Request**    | model + messages → response.choices[0]             |
| 2   | **Parameters**     | temperature (randomness) + max_tokens (length)     |
| 3   | **Tokens & Cost**  | Model token-оор боддог, та token-оор төлнө         |
| 4   | **Shot Prompting** | Жишээ нэмэх тусам чанар сайжирна                   |
| 5   | **Roles**          | system (rules) + user (input) + assistant (output) |
| 6   | **Guardrails**     | System message-д restriction /хязгаарлалт/ нэмэх   |
| 7   | **Multi-turn**     | Model memory байхгүй, бүтэн history илгээдэг       |

---

<!-- _class: lead -->

# Hands-On Time

## Tasks 8-12 + Capstone

Roles, guardrails, multi-turn chatbot!
