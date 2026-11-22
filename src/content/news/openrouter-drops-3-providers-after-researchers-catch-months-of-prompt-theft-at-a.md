---
title: "OpenRouter Drops 3 Providers After Researchers Catch Months of Prompt Theft at AI Hosting Firms"
description: "Attackers stole data from inside three AI inference providers for months, and none of the three knew until researchers told…"
pubDate: 2026-11-22T05:06:55.000Z
source: "https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html"
sourceName: "The Hacker News"
summary: "Attackers stole data from inside three AI inference providers for months, and none of the three knew until researchers told them, the industrial cybersecurity company Dragos said this week. OpenRouter, a gateway that routes customers' AI requests to a pool of third-party providers, said today that it has removed three providers from its platform, removed 125 endpoints from eligibility for Zero Data Retention, and notified all potentially affected customers. The largest of the three breaches involved a couple hundred AWS keys that were planted, each sent in exactly one request to one provider during a few short windows in late October. Every request sent during those windows was stolen, and some came from requests the provider had rejected before a model ever ran, indicating the attacker was copying traffic at the first point of arrival rather than deeper in the inference stack."
---

Attackers stole data from inside three AI inference providers for months, and none of the three knew until researchers told them, the industrial cybersecurity company Dragos said this week. OpenRouter, a gateway that routes customers' AI requests to a pool of third-party providers, said today that it has removed three providers from its platform, removed 125 endpoints from eligibility for Zero Data Retention, and notified all potentially affected customers. The largest of the three breaches involved a couple hundred AWS keys that were planted, each sent in exactly one request to one provider during a few short windows in late October.

Every request sent during those windows was stolen, and some came from requests the provider had rejected before a model ever ran, indicating the attacker was copying traffic at the first point of arrival rather than deeper in the inference stack.
