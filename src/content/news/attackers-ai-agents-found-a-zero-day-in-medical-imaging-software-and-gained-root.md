---
title: "Attackers' AI Agents Found a Zero-Day in Medical-Imaging Software and Gained Root Access"
description: "Suspected China-linked hackers used autonomous AI agents to find a previously unknown flaw in MONAI Label, an open-source medical imaging…"
pubDate: 2026-11-21T11:03:17.000Z
source: "https://thehackernews.com/2026/11/attackers-ai-agents-found-zero-day-in.html"
sourceName: "The Hacker News"
summary: "Suspected China-linked hackers used autonomous AI agents to find a previously unknown flaw in MONAI Label, an open-source medical imaging server, and gain root access to a university server, Amazon Threat Intelligence said this week. The flaw allows an attacker with no account to write files outside the server's storage folder, and it affects MONAI Label 0.8.5 and earlier in the default setup, which runs with no login enabled. MONAI Label is a server that research teams use to label medical scans and train imaging models; it is a separate program from the broader MONAI framework. The server writes with the privileges of the account it runs under, so an attacker cannot write anywhere on the machine, but a writable code or settings location can open a path to running code. Cairn is an open-source framework that runs AI agents as automated penetration testers, and the exposed panel revealed the agents' task settings, prompts, and run history."
---

Suspected China-linked hackers used autonomous AI agents to find a previously unknown flaw in MONAI Label, an open-source medical imaging server, and gain root access to a university server, Amazon Threat Intelligence said this week. The flaw allows an attacker with no account to write files outside the server's storage folder, and it affects MONAI Label 0.8.5 and earlier in the default setup, which runs with no login enabled. MONAI Label is a server that research teams use to label medical scans and train imaging models; it is a separate program from the broader MONAI framework.

The server writes with the privileges of the account it runs under, so an attacker cannot write anywhere on the machine, but a writable code or settings location can open a path to running code. Cairn is an open-source framework that runs AI agents as automated penetration testers, and the exposed panel revealed the agents' task settings, prompts, and run history.
