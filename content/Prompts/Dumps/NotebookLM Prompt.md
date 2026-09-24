
To get the best results from Google’s NotebookLM, you need to remember its specific architecture: **it grounds its answers in the sources you upload.** It will not hallucinate outside info (mostly) if you tell it to stick to the source.

Here are the best prompts for studying a topic using NotebookLM, categorized by your learning goal.

### 1. The "Mega-Prompt" (The All-In-One Study Guide)

Use this when you first upload your documents (PDFs, slides, notes) to get a comprehensive roadmap.

> "Act as a university professor teaching a course based on these uploaded documents. Create a comprehensive **Study Guide** for me that includes:
> 
> 1. **Executive Summary:** A 3-sentence overview of the main thesis across all sources.
>     
> 2. **Key Concepts:** A glossary of the top 10 most important terms/definitions found in the text.
>     
> 3. **Core Themes:** The 3-5 main arguments or pillars of this topic, with citations for where they appear.
>     
> 4. **Chronology/Process:** If applicable, outline the timeline or step-by-step process described.
>     
> 5. **Open Questions:** Identify 3 areas where the text is ambiguous or where the authors disagree."
>     

---

### 2. The "Active Recall" Prompt (For Exam Prep)

NotebookLM is excellent at creating quizzes. Use this to test your retention.

> "Based **strictly** on the provided sources, generate a practice exam.
> 
> - **Part 1:** 5 Multiple-choice questions that test understanding of nuances (not just easy facts).
>     
> - **Part 2:** 3 Short-answer questions that require synthesizing info from different sections.
>     
> - **Part 3:** An Answer Key that provides the correct answer AND the specific citation/source number where the answer can be found."
>     

**Pro Tip:** After you take the quiz, paste your answers back into the chat and ask: "Grade my answers based on the text. Tell me what I got wrong and explain the correct answer using quotes from the source."

---

### 3. The "Feynman Technique" Prompt (For Deep Understanding)

Use this when the language in your source material is too academic or dense.

> "I am struggling to understand [Specific Concept/Chapter]. Explain this specific concept to me three times:
> 
> 1. **The 5-Year-Old Level:** Explain it using a simple analogy.
>     
> 2. **The High School Level:** Explain it using standard language, stripping away jargon.
>     
> 3. **The Expert Level:** Summarize it using the technical terms from the text, but define them in parentheses as you go."
>     

---

### 4. The "Connector" Prompt (For Synthesis)

Use this if you have uploaded multiple documents (e.g., a lecture transcript + a textbook chapter + a research paper) and need to see how they fit together.

> "I have uploaded multiple sources. Please perform a cross-analysis:
> 
> 1. Where do these sources agree? (Consensus)
>     
> 2. Where do they contradict each other or offer different perspectives? (Divergence)
>     
> 3. Create a table comparing how [Source A] defines [Topic] versus how [Source B] defines it."
>     

---

### 5. The "Flashcard Generator" Prompt (For Memorization)

Use this to copy-paste into Anki or Quizlet.

> "Create a two-column list formatted for flashcards.
> 
> - **Column A:** The Term, Date, or Concept.
>     
> - **Column B:** The Definition, Event, or Explanation (keep it under 20 words).
>     
> - Focus on the most highly cited terms in the documents."
>     

---

### 6. The "Socratic Tutor" Prompt (Interactive Learning)

Use this if you want to have a conversation rather than just reading summaries.

> "I want to study [Topic] interactively. Don't just give me a summary. Instead, ask me a question about the material. Wait for my answer. Then, grade my answer based on the text, correct any misconceptions, and ask me a follow-up question that goes deeper. Let's do this one question at a time."

---

### Key Tips for NotebookLM Success:

1. **Pinpoint Citations:** Always ask NotebookLM to **"include citations"** in its output. This allows you to click the number [1] and jump immediately to that spot in the PDF/Video transcript to verify.
    
2. **Audio Overview:** Before you start chatting, generate the "Audio Overview" (the podcast feature). Listen to it to get the "vibe" of the content, then use the chat to drill down into details.
    
3. **Scope Control:** If you uploaded a 500-page book but only want to study Chapter 4, start your prompt with: "Focusing ONLY on pages 100-125 (Chapter 4)..."