To get **precise** results from NotebookLM, you need to move beyond asking for "summaries" and instead ask for **structures** and **logic**.

Here are the elaborated, high-precision versions of those two prompts. These are designed to force the AI to process the information deeply rather than just extracting keywords.

---

### 1. The Precision Mega-Prompt: "The Hierarchy of Knowledge"
**Goal:** To move beyond a flat list of bullet points and understand how ideas relate to one another (Cause $\to$ Effect, or Principle $\to$ Application).

**The Upgrade:** Instead of just asking for "Key Themes," we ask for a **Structured Hierarchy** and **Mental Models**.

#### Copy/Paste this Prompt:
> "Act as a lead researcher synthesizing these documents for a doctoral candidate. Do not just summarize; restructure the information into a **Hierarchical Study Guide**.
>
> Please generate the following distinct sections:
>
> 1.  **The Central Thesis:** In exactly 2 sentences, what is the single most important argument these sources are making?
> 2.  **The Logical Framework (The 'Skeleton'):** Break down the argument structure. How does the author build their case? (e.g., 'First they establish X, then they refute Y, and finally propose Z').
> 3.  **Key Terminology Matrix:** Create a table with 3 columns:
>     *   **Term:** The jargon/concept.
>     *   **Definition:** How the text defines it.
>     *   **Context:** Why is this term used? (e.g., 'Used to criticize previous theories').
> 4.  **The Evidence Bank:** List the top 3 specific case studies, statistics, or examples the text uses to prove its point. **Include citation numbers.**
> 5.  **Inter-Source Synthesis:** (If multiple sources) Where do these sources overlap, and where do they fundamentally disagree on the definition of [Topic]?"

**Why this is more precise:**
*   **The "Logical Framework":** Forces NotebookLM to analyze the *flow* of the document, not just the content. This helps you understand the "story" of the study material.
*   **The "Context" Column:** Most study guides give you a definition. This prompt asks *why* the term matters.

---

### 2. The Precision Feynman Prompt: "The Analogy & The Gap"
**Goal:** To simplify complex ideas without losing the important details.

**The Upgrade:** Standard Feynman prompts often oversimplify to the point of being wrong. This version adds a **"Nuance Check"**—asking the AI to identify what gets lost in the simple version. This is critical for high-level study.

#### Copy/Paste this Prompt:
> "I need to deeply understand [Insert Specific Concept/Chapter]. Please process this using the **'Layered Explanation'** method. Stick strictly to the source text.
>
> **Layer 1: The Intuitive Hook (EL5)**
> Explain the concept using a real-world analogy (e.g., cooking, sports, mechanics).
>
> **Layer 2: The Academic Translation**
> Take the analogy from Layer 1 and map it back to the specific technical terms used in the text. (e.g., 'The ingredients in the analogy represent [Technical Term A], and the oven represents [Technical Term B]').
>
> **Layer 3: The Nuance Check (CRITICAL)**
> Analogies are never perfect. Explicitly state: What aspect of the technical concept does the analogy fail to capture? What detail is present in the text that is too complex for the analogy?
>
> **Layer 4: Verification**
> Provide a direct quote from the source that best encapsulates this concept, with its citation."

**Why this is more precise:**
*   **Layer 2 (Translation):** This connects the "fun" analogy back to the "boring" exam material. It bridges the gap between understanding and memorizing.
*   **Layer 3 (Nuance Check):** This is the safety net. It prevents you from thinking you understand a topic when you actually only understand the simplified version. It highlights the complexities you need to watch out for.

---

### Recommended Workflow (How to combine them)

To get the absolute best study session, use them in this order:

1.  **Run the Precision Mega-Prompt** on the whole notebook.
2.  Read the "Logical Framework" section it generates.
3.  Identify the one part of the framework that confuses you the most.
4.  **Run the Precision Feynman Prompt** specifically on that confusing part.