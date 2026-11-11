---
title: "We Built An Agent That Broke All of Our Security Rules. Here's What We Learned."
description: "When a browser agent acts inside a user's authenticated session, the application may see the user but not the agent,…"
pubDate: 2026-11-11T12:01:59.000Z
source: "https://thehackernews.com/2026/11/we-built-agent-that-broke-all-of-our.html"
sourceName: "The Hacker News"
summary: "When a browser agent acts inside a user's authenticated session, the application may see the user but not the agent, the delegation, or the task's intended scope. By creating an agent that breaks all the security rules, Token learned how companies should be using identity to gain control, especially as agent use scales. The agent we created is named Rehearsal. From a security perspective, it's a typical UI agent that runs in the user's browser. But it also means the agent runs within the user's session and has their reach. Because Token owns both the agent and the app it runs, we can close each gap from the inside. We learned that there are multiple best practices that you can apply when you control the AI agent itself: This works for our own agent, but only because it relies on access that no outside agent has."
---

When a browser agent acts inside a user's authenticated session, the application may see the user but not the agent, the delegation, or the task's intended scope. By creating an agent that breaks all the security rules, Token learned how companies should be using identity to gain control, especially as agent use scales. The agent we created is named Rehearsal.

From a security perspective, it's a typical UI agent that runs in the user's browser. But it also means the agent runs within the user's session and has their reach. Because Token owns both the agent and the app it runs, we can close each gap from the inside.

We learned that there are multiple best practices that you can apply when you control the AI agent itself: This works for our own agent, but only because it relies on access that no outside agent has.
