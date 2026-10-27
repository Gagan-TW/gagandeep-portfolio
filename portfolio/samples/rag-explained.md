---
title: "Your AI Is Only as Good as What It Reads: RAG Explained Simply"
description: A beginner-friendly guide to Retrieval-Augmented Generation (RAG), and why good documentation makes AI answers better.

---

# Your AI Is Only as Good as What It Reads: RAG Explained Simply

Have you ever asked an AI tool a question and wondered where the answer came from?

It replies in seconds, in confident and well-written sentences. But it has never seen your company's documents. It may not know what changed last month. So on what basis is it answering you?

Sometimes, when the AI does not know, it does not say so. It fills the gap with something that sounds right but is not true. This is called a hallucination. And once you catch an AI making things up, it is hard to trust anything it says.

What if, before answering, the AI could look up the right information in a trusted source, such as your company's documents, and answer from that instead of guessing?

That is exactly what RAG does.

## What Is RAG?

RAG stands for **Retrieval-Augmented Generation**. The name sounds technical, but each word describes one simple step.

Think of a new customer support agent on her first day. A customer asks, "Can I get a refund after 30 days?" She is new, so she does not guess. She opens the company's help centre, finds the refund policy, keeps it open next to the customer's message, and writes her reply from it.

That is RAG.

### R for Retrieval: find the right article

Retrieval means finding. When you ask a question, the system first searches a trusted collection of documents and picks out the parts that match. Just like the agent searching the help centre for the refund policy.

### A for Augmented: keep it next to the question

Augmented means added to. The system adds those matching parts to your question before sending it to the AI. Now the AI sees your question and the right information side by side. Just like the agent keeping the policy open next to the customer's message.

### G for Generation: answer from what it says

Generation means creating. The AI writes its answer using the information in front of it, not just its memory. Just like the agent replying from what the policy actually says.

| Letter | Word | What it means | The support agent |
| --- | --- | --- | --- |
| R | Retrieval | Find the matching information | Searches the help centre |
| A | Augmented | Add it to the question | Keeps the policy next to the message |
| G | Generation | Write the answer from it | Replies from what the policy says |

But notice one thing. If the refund policy in the help centre is unclear or out of date, the agent's answer will be too. The same is true for RAG. We will come back to that.

*Find the facts first. Then answer. That is the whole idea of RAG.*

## Why AI Gets Things Wrong

An AI model learns by reading a huge amount of text. Once that training ends, its knowledge is fixed. When you ask it something, it answers from what it already learned. If that knowledge does not fit your question, it guesses. That guess is a hallucination.

This happens for two main reasons.

### Its knowledge stops at a certain date

Every AI model is trained up to a point in time. Anything that happened after that, such as a new product feature, a changed price, or an updated policy, is simply unknown to it. But it will still try to answer, using older information that may no longer be true.

### It has never seen your private documents

An AI model learns from public information. It has never read your company's help centre, your internal guides, or your latest release notes. So when a customer asks about your product, the AI does not know the real answer. It writes one that sounds like it could be true.

### Why it guesses instead of saying "I don't know"

OpenAI, the company behind ChatGPT, explains that AI models are trained in a way that rewards guessing. It is like a student in a multiple-choice exam. Leaving a question blank earns nothing, but a guess might be right. So the student guesses, every time.

Now think back to our new support agent. If she answered from memory on her first day, she would make the same mistakes. She does not know the latest policy, and she has never read your help centre. What makes her reliable is not her memory. It is that she looks things up first.

*An AI is rewarded for guessing, not for admitting it does not know. So when the right information is missing, it guesses with confidence.*

## How RAG Works, Step by Step

RAG works in two stages. The first happens once, before anyone asks a question. The second happens every time someone does.

### Stage 1: Prepare the knowledge (before any question)

**1. Collect the documents.**
Gather the trusted information you want the AI to use: help articles, policies, product guides, API docs. This is information the AI never saw during training.

**2. Split them into small pieces.**
Long documents are cut into short sections, often a few paragraphs each. These pieces are called chunks. Small pieces make it easier to find exactly the right part later.

**3. Turn each piece into numbers that capture its meaning.**
Each chunk is converted into a list of numbers called an embedding. Think of it as a location on a map of meaning. Pieces about similar topics sit close together, even if they use different words. "Refund" and "money back" end up as neighbours.

**4. Store them in a searchable database.**
The embeddings are saved in a vector database, a database built to search by meaning instead of exact words.

### Stage 2: Answer a question (every time)

**5. Find the closest pieces.**
The user's question is also turned into an embedding. The system then finds the stored pieces that sit closest to it on the map of meaning. This is the Retrieval.

**6. Add them to the question.**
Those pieces are attached to the question, along with an instruction such as "Answer using only this information." This is the Augmentation.

**7. Write the answer.**
The AI writes its reply using the information in front of it. This is the Generation.

Let's put it all together. Here are the same steps in short, grouped into the two jobs RAG does:
**Preparing the documents (done once):**

1. Collect the trusted documents.
2. Split them into small chunks.
3. Turn each chunk into numbers.
4. Store them in a vector database.

**Answering a question (every time):**

1. Turn the question into numbers.
2. Find the closest chunks.
3. Add them to the question.
4. Let the AI write the answer from them.

Remember our support agent? Before her first customer ever wrote in, someone had to write the help centre, organise it into clear articles, and make it searchable. That is Stage 1. Without it, she would have nothing to look up.

*RAG does not start with the question. It starts with the documents.*

## A Real Example: One Question, From Start to Finish

Let's follow one real question through RAG. Imagine a payments app called PayEase. Its help centre has an article called "Why Payments Fail", with a section like this:

> **Card declined by the bank**
> If your bank declines a card payment, PayEase shows error code PE-402. This usually happens when the card has expired, the daily limit is reached, or online payments are turned off for the card. Check your card details, then try again or use another payment method.

This article was already prepared in Stage 1. It was split into chunks, turned into embeddings, and stored.

Now a customer types into the PayEase chat:

> "my payment isn't going through, it says PE-402"

**Without RAG,** the AI has never seen PayEase's help centre. It might reply with general advice about internet connections, or invent a meaning for PE-402. The answer sounds helpful. It is not.

**With RAG,** here is what happens:

**Retrieve (find).** The question is turned into numbers. The system searches the stored chunks and finds "Card declined by the bank" as the closest match. The customer never wrote "declined" or "bank", but the meaning is close, and the error code matches exactly.

**Augment (add).** That chunk is attached to the question before it goes to the AI, like this:

```
Answer the customer using only the information below.

Information:
Card declined by the bank. If your bank declines a card payment,
PayEase shows error code PE-402. This usually happens when the card
has expired, the daily limit is reached, or online payments are
turned off for the card. Check your card details, then try again
or use another payment method.

Customer question:
my payment isn't going through, it says PE-402
```

**Generate (answer).** The AI now replies from that information:

> "Error PE-402 means your bank declined the payment. This usually happens if your card has expired, you have reached your daily limit, or online payments are turned off for your card. Please check your card details, then try again or use another payment method."

The answer is specific, correct, and based on PayEase's own help centre. Not a guess.

*The AI did not get smarter. It simply had the right page in front of it.*

## Where RAG Still Goes Wrong

RAG makes AI answers far more reliable. But it is not magic. Researchers who built real RAG systems found several places where they still fail. Here are the most common ones, using our PayEase example.

### The answer is not in the documents

A customer asks, "How do I get a refund for a UPI payment?" But PayEase never wrote a help article about UPI refunds. There is nothing to retrieve. A well-built system should say, "I don't have information about that." A poorly built one guesses, and we are back to hallucination.

### The right piece is found, but it has lost its meaning

Remember, documents are cut into small chunks. Imagine one chunk that says only: "This usually happens when the card has expired or the daily limit is reached." On its own, it does not say which error it is about. The heading "Card declined by the bank" and the code PE-402 were left behind in another chunk. So when a customer asks about PE-402, this chunk may not be found at all.

### The answer is there, but the AI misses it

Sometimes the right chunk reaches the AI, but it sits among other chunks that are similar, outdated, or contradictory. For example, an old refund policy and a new one, both still in the help centre. The AI may pick the wrong one or mix them together.

### The answer comes in the wrong shape or size

The customer wanted three quick steps, but the AI gives a long paragraph. Or the customer wanted a simple yes or no, and the AI explains the whole payment system. The information is correct, but the answer does not match what the customer needed.

### The answer is incomplete

Some questions need information from more than one document. "Why did my payment fail, and when will I get my money back?" needs both the failed payments article and the refunds article. If the system finds only one, the customer gets half an answer.

Look at these problems again. A missing article. A chunk that makes no sense without its heading. An old policy that was never removed. Two articles that should link to each other. Most of these problems do not start with the AI. They start with the documents.

*RAG can only be as good as the documents it reads.*

## Why This Matters for Technical Writers

Not only humans need clear, concise, complete, and correct documentation. AI needs it too.

It is true that AI can make your life easier. But it can only keep that promise if you feed it good documents. Here are the writing practices that make the difference, and why each one matters for RAG.

| Writing practice | Why it matters for RAG | Example |
| --- | --- | --- |
| **Clear headings and topic hierarchy** | Headings tell the system what each chunk is about. | A chunk under "Card declined by the bank" is easy to find. One under "More information" is not. |
| **Sections that make sense on their own** | A chunk may reach the AI without the page around it. | Write "Error PE-402 means your bank declined the payment", not "This error means…". |
| **Complete pages** | If the answer is not written anywhere, there is nothing to retrieve. | Use support tickets and search terms to find the questions you have not answered yet. |
| **Related information kept together or linked** | Some questions need more than one article. | Link the failed payments article to the refunds article, so the customer gets the full answer. |
| **Up-to-date content** | Old and new versions can confuse the AI. | When a policy changes, update or remove the old page instead of adding a new one beside it. |
| **Images with clear alt text** | Many RAG systems read only text, so images without alt text are invisible. | If an important step appears in a screenshot, write it in the text too. |
| **Clean numbered lists** | Complete steps in order let the AI give exact steps, not a vague summary. | Write every step in the same pattern, and leave nothing out. |

So now you have one more reader to plan for: the AI. Add it to your audience analysis. Understand what your users want from the AI, and what the AI needs from your documents to answer them correctly.

*You are no longer just writing for the user. You are helping the AI bring the right information to the right user.*

## What Comes Next

You do not need to build a RAG system. But as a technical writer, you are responsible for what it reads.

Start with your own documentation:

1. List the questions your users ask most often.
2. Find the exact words they use when they ask them.
3. Check that each question can be answered from a single topic, so the AI does not have to search many pages to answer it.
4. Check that related information sits together or is linked.
5. Fix what is missing, one page at a time.

That is how you start building documentation for RAG.

*Always remember: you are the only one the AI can rely on. It has no teammate to ask, and when the answer is missing, it guesses. Your documents can help it guess less and use facts more.*

## Sources

- [What is RAG? (AWS)](https://aws.amazon.com/what-is/retrieval-augmented-generation)
- [Introduction to RAG in AI development (Databricks)](https://docs.databricks.com/en/ai-cookbook/rag-overview.html)
- [What are AI hallucinations? (IBM)](https://www.ibm.com/think/topics/ai-hallucinations)
- [Why language models hallucinate (OpenAI)](https://openai.com/index/why-language-models-hallucinate/)
- [Seven Failure Points When Engineering a Retrieval Augmented Generation System (arXiv)](https://arxiv.org/html/2401.05856v1)
- [Introducing Contextual Retrieval (Anthropic)](https://anthropic.com/news/contextual-retrieval)
- [Documentation best practices for RAG applications (AWS Prescriptive Guidance)](https://docs.aws.amazon.com/prescriptive-guidance/latest/writing-best-practices-rag/best-practices.html)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks, the original RAG paper (arXiv)](https://arxiv.org/abs/2005.11401v4)