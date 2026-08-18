---
title: "Microsoft Copilot reveals secret input that allowed it to be hacked"
description: "It's not every day that attackers can force a frontier AI model to cough up user passwords and other sensitive…"
pubDate: 2026-08-18T13:00:04.000Z
source: "https://arstechnica.com/security/2026/08/microsoft-copilot-reveals-secret-input-that-allowed-it-to-be-hacked/"
sourceName: "Ars Technica"
summary: "It's not every day that attackers can force a frontier AI model to cough up user passwords and other sensitive data without user confirmation. Researchers at security firm Varonis knew they wanted to create an exploit that would exfiltrate user data when a user did nothing more than click on a link. Like most AI assistants today, Copilot steadfastly refused and made clear that sensitive prompts like that require explicit user consent in the form of a gesture, such as pressing a return key or other key. In response, the researchers peppered Copilot with questions about the guardrails that required user confirmation before the assistant could execute powerful commands. Eventually, Copilot provided a stunning Microsoft trade secret—an undocumented prompt parameter that completely bypassed the requirement for user consent. \"At the beginning, Copilot kept refusing, but every refusal revealed technical details about its internal architecture,\" Varonis Senior Researcher Lior Adar told Ars. \"Copilot eventually disclosed undocumented parameters."
---

It's not every day that attackers can force a frontier AI model to cough up user passwords and other sensitive data without user confirmation. Researchers at security firm Varonis knew they wanted to create an exploit that would exfiltrate user data when a user did nothing more than click on a link. Like most AI assistants today, Copilot steadfastly refused and made clear that sensitive prompts like that require explicit user consent in the form of a gesture, such as pressing a return key or other key.

In response, the researchers peppered Copilot with questions about the guardrails that required user confirmation before the assistant could execute powerful commands. Eventually, Copilot provided a stunning Microsoft trade secret—an undocumented prompt parameter that completely bypassed the requirement for user consent. "At the beginning, Copilot kept refusing, but every refusal revealed technical details about its internal architecture," Varonis Senior Researcher Lior Adar told Ars.

"Copilot eventually disclosed undocumented parameters.
