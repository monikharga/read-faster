---
title: "Claude Opus 5 Helped Researchers Take Over OpenAI Staff Accounts via Chained Flaws"
description: "Three researchers at the security firm Hacktron used Anthropic's Claude Opus 5 to chain two flaws and take over the…"
pubDate: 2026-09-19T18:36:53.000Z
source: "https://thehackernews.com/2026/09/claude-opus-5-helped-researchers-take.html"
sourceName: "The Hacker News"
summary: "Three researchers at the security firm Hacktron used Anthropic's Claude Opus 5 to chain two flaws and take over the ChatGPT and Codex accounts of several OpenAI employees, then reach an internal OpenAI code repository. OpenAI said the award \"recognizes the OpenAI-side finding, not the actions against Discourse,\" the open-source software that runs the forum. The reason a bug in a public forum could reach staff accounts lies in OpenAI's login system, not in the forum software. OpenAI's forum offers a \"Sign in with OpenAI\" option, the same single sign-on (SSO) that staff uses elsewhere. Once the researchers took control of the forum server, the shared login let them take over the ChatGPT and Codex accounts of forum members who worked at OpenAI. Hacktron said this was an OpenAI identity problem, not a flaw in the forum software: any first- or third-party service using the same sign-on could have granted the same access."
---

Three researchers at the security firm Hacktron used Anthropic's Claude Opus 5 to chain two flaws and take over the ChatGPT and Codex accounts of several OpenAI employees, then reach an internal OpenAI code repository. OpenAI said the award "recognizes the OpenAI-side finding, not the actions against Discourse," the open-source software that runs the forum. The reason a bug in a public forum could reach staff accounts lies in OpenAI's login system, not in the forum software.

OpenAI's forum offers a "Sign in with OpenAI" option, the same single sign-on (SSO) that staff uses elsewhere. Once the researchers took control of the forum server, the shared login let them take over the ChatGPT and Codex accounts of forum members who worked at OpenAI. Hacktron said this was an OpenAI identity problem, not a flaw in the forum software: any first- or third-party service using the same sign-on could have granted the same access.
