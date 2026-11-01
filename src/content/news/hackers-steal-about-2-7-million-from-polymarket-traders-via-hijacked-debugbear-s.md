---
title: "Hackers Steal About $2.7 Million From Polymarket Traders via Hijacked DebugBear Script"
description: "The code had replaced a page-speed script that the site loaded from an outside company."
pubDate: 2026-11-01T07:25:40.000Z
source: "https://thehackernews.com/2026/11/hackers-steal-about-27-million-from.html"
sourceName: "The Hacker News"
summary: "The code had replaced a page-speed script that the site loaded from an outside company. The replaced script came from DebugBear, whose real user monitoring (RUM) tool measures how fast web pages load for real visitors. Researchers at Hudson Rock downloaded the malicious file on October 29 from the address Polymarket's site used to load the DebugBear script. They also found a change in Polymarket's site code that removed the DebugBear script. Each DebugBear customer loads its own copy of the script, and the file that was swapped was Polymarket's. The code reuses the access a signed-in trader already has in an open Polymarket page, Hudson Rock found after reviewing the file without running it. Those API keys alone cannot place an order on Polymarket, because orders also need a wallet signature."
---

The code had replaced a page-speed script that the site loaded from an outside company. The replaced script came from DebugBear, whose real user monitoring (RUM) tool measures how fast web pages load for real visitors. Researchers at Hudson Rock downloaded the malicious file on October 29 from the address Polymarket's site used to load the DebugBear script.

They also found a change in Polymarket's site code that removed the DebugBear script. Each DebugBear customer loads its own copy of the script, and the file that was swapped was Polymarket's. The code reuses the access a signed-in trader already has in an open Polymarket page, Hudson Rock found after reviewing the file without running it.

Those API keys alone cannot place an order on Polymarket, because orders also need a wallet signature.
