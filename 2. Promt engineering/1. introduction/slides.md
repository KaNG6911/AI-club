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

# Prompt Engineering

## Chapter 1: Introduction & Best Practices

AI Club | 2026

---

# Өнөөдрийн хичээл

1. **Prompt Engineering** гэж юу вэ
2. **Message roles** -- system, user, assistant
3. **Prompt-ын үндсэн зарчмууд** -- тодорхой, нарийвчлалтай
4. **Delimiters** -- prompt-г бүтэцтэй болгох
5. **Structured output** -- хүснэгт, жагсаалт, custom format
6. **Conditional prompts** -- нөхцөлт заавар

---

# Prompt Engineering гэж юу вэ?

**Prompt engineering** = LLM-ээс хүссэн хариу авахын тулд prompt-г зохиох урлаг

**Жишээ -- адилхан асуулт, өөр арга:**

```
"Poems about AI"         →  Дур зоргоороо шүлэг
```

```
"Write a 4-line rhyming poem about AI for a 10-year-old.
 Use simple words. End with a hopeful message."
```

→ **Хоёр дахь нь хамаагүй дээр** -- нэмсэн зүйл нь constraint биш, guide юм

> Prompt-г сайн бичих нь **model-г сольсонтой адил үр дүнтэй**

---

# OpenAI Chat Completions -- Roles

```typescript
const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "system",                    // ← AI-ийн "constitution"
      content: "You are a helpful assistant.",
    },
    {
      role: "user",                      // ← Хэрэглэгчийн асуулт
      content: "What is TypeScript?",
    },
    {
      role: "assistant",                 // ← Өмнөх хариу (multi-turn)
      content: "TypeScript is...",
    },
  ],
});
```

---

# get_response() Helper Function

**Курс даяар ашиглах utility function:**

```typescript
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
```

**`temperature: 0`** = deterministic (тогтмол) хариу -- туршилтанд тохиромжтой

---

# Prompt Engineering-ийн үндсэн зарчмууд

**1. Тодорхой action verb ашигла**

| Муу (тодорхойгүй) | Сайн (тодорхой) |
|-------------------|-----------------|
| understand, think | write, explain, list, classify |
| feel, know | translate, summarize, generate |

**2. Дэлгэрэнгүй context өг**

```
❌ "Write an email"
✓  "Write a formal 3-sentence email declining a meeting
    invitation. Tone: professional, apologetic."
```

---

# Delimiters -- Prompt-г бүтэцтэй болгох

**Delimiter** = prompt дахь өгөгдлийг тусгаарлах тэмдэг

```typescript
const story = "Once upon a time, a robot found a glowing seed...";

// ❌ Delimiter-гүй -- model хаана data, хаана instruction болохыг мэдэхгүй
const prompt = `Complete this story: ${story}`;

// ✓ Triple backtick ашигласан
const prompt = `Complete the following story in two paragraphs.
Use the style of Shakespeare.

Story: \`\`\`${story}\`\`\``;
```

**Нийтлэг delimiter-ууд:** ` ``` `, `"""`, `---`, `<tag>`, `[brackets]`

---

# Template Literals -- Dynamic Prompt

```typescript
const report = "...long market research text...";
const focus = "AI and data privacy";

// TypeScript template literal = Python f-string
const prompt = `
Summarize the following report in no more than 5 sentences.
Focus specifically on: ${focus}

Report:
${report}
`;

const response = await getResponse(prompt);
```

**`${variable}`** -- prompt-д динамик өгөгдөл оруулах хамгийн цэвэр арга

---

# Structured Output -- Table

```typescript
const prompt = `Generate a table of 10 must-read science fiction books.
Include these columns: Title, Author, Year.
Format as a markdown table.`;
```

**Output:**
| Title | Author | Year |
|-------|--------|------|
| Dune  | Frank Herbert | 1965 |
| 1984  | George Orwell | 1949 |
| ...   | ...    | ...  |

**Format заагаагүй бол model өөрийн хүссэнээр format хийнэ**

---

# Custom Output Format

```typescript
const instructions = `Detect the language and generate a title for the text.`;

const outputFormat = `
Return the result in this exact format:
Text: [original text]
Language: [detected language]
Title: [generated title]
`;

const prompt = instructions + outputFormat + `\n\nText: \`\`\`${text}\`\`\``;
```

**Output format-г тодорхой зааж өгснөөр:**
- Parsing хялбар болно
- Inconsistency багасна
- Downstream code-д шууд ашиглаж болно

---

# Conditional Prompts

**If-else logic-г prompt-д оруулах:**

```typescript
const prompt = `
Analyze the following text.

Step 1: Detect the language.
Step 2: Count the number of sentences.
Step 3: If the text has MORE than one sentence, generate a title.
         If it has only one sentence, write "N/A" for the title.

Output format:
Language: [language]
Sentences: [count]
Title: [title or N/A]

Text: \`\`\`${text}\`\`\`
`;
```

---

<!-- _class: lead -->

# Hands-On Time

## Tasks 01-07

Message roles, getResponse, delimiters, structured output, conditional prompts
