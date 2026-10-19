---
title: "OpenCode Console Breach May Have Exposed OpenAI, Anthropic, and Google API Keys"
description: "Console is OpenCode's optional hosted service: a workspace saves its own OpenAI, Anthropic, or Google key there, and Console uses…"
pubDate: 2026-10-19T06:07:08.000Z
source: "https://thehackernews.com/2026/10/opencode-console-breach-may-have.html"
sourceName: "The Hacker News"
summary: "Console is OpenCode's optional hosted service: a workspace saves its own OpenAI, Anthropic, or Google key there, and Console uses that key to call the provider so team members can use the models without ever seeing the key. The affected group is 1.4% of Console users, all of whom have an outside provider linked, and OpenCode has told them via email to revoke those keys with each provider and replace them. The breach involves \"the OpenCode Console, not OpenCode itself,\" co-founder Dax Raad wrote in a reply on X, and those keys \"never come to us.\" A provider key is a bearer credential: whoever holds a copy can run billable requests against the owner's account until the provider revokes it. Deleting the key from Console does not revoke it, and a Console budget cannot cap that use either, because Console only sees requests that pass through its own gateway."
---

Console is OpenCode's optional hosted service: a workspace saves its own OpenAI, Anthropic, or Google key there, and Console uses that key to call the provider so team members can use the models without ever seeing the key. The affected group is 1.4% of Console users, all of whom have an outside provider linked, and OpenCode has told them via email to revoke those keys with each provider and replace them. The breach involves "the OpenCode Console, not OpenCode itself," co-founder Dax Raad wrote in a reply on X, and those keys "never come to us." A provider key is a bearer credential: whoever holds a copy can run billable requests against the owner's account until the provider revokes it.

Deleting the key from Console does not revoke it, and a Console budget cannot cap that use either, because Console only sees requests that pass through its own gateway.
