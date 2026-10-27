---
title: "OpenAI Compaction Flaw Let Researchers Bypass Hidden Reasoning Protections"
description: "OpenAI's compaction feature, which shrinks a long conversation to save space, could be turned into a way to copy a…"
pubDate: 2026-10-27T08:22:43.000Z
source: "https://thehackernews.com/2026/10/openai-compaction-flaw-let-researchers.html"
sourceName: "The Hacker News"
summary: "OpenAI's compaction feature, which shrinks a long conversation to save space, could be turned into a way to copy a model's hidden reasoning out in plain text, security firm Xint has shown. OpenAI's reasoning models work through a problem before answering, and the service normally returns only the raw reasoning as an encrypted item the user cannot read. Xint says it cannot prove the copied text is word-for-word the model's real reasoning, because it never had the original to compare against. It then called the compaction step on the same model and told it to copy that reasoning into the compacted item word-for-word, with every space changed to a tab to get past OpenAI's usage-policy filters. Compaction got past that block, Xint said, because the compaction step runs on the same model that made the reasoning, so it never triggers the cross-model check."
---

OpenAI's compaction feature, which shrinks a long conversation to save space, could be turned into a way to copy a model's hidden reasoning out in plain text, security firm Xint has shown. OpenAI's reasoning models work through a problem before answering, and the service normally returns only the raw reasoning as an encrypted item the user cannot read. Xint says it cannot prove the copied text is word-for-word the model's real reasoning, because it never had the original to compare against.

It then called the compaction step on the same model and told it to copy that reasoning into the compacted item word-for-word, with every space changed to a tab to get past OpenAI's usage-policy filters. Compaction got past that block, Xint said, because the compaction step runs on the same model that made the reasoning, so it never triggers the cross-model check.
