---
title: "A Shared ChatGPT Link Could Run Attacker Code in Your Session and Read Private Chats"
description: "A malicious ChatGPT share link could run an attacker's code in the logged-in session of anyone who opened it, allowing…"
pubDate: 2026-10-31T05:33:41.000Z
source: "https://thehackernews.com/2026/10/a-shared-chatgpt-link-could-run.html"
sourceName: "The Hacker News"
summary: "A malicious ChatGPT share link could run an attacker's code in the logged-in session of anyone who opened it, allowing them to read their private conversations, researchers at the security firm Parameter showed. Once the link opened, the attacker's code ran inside the victim's signed-in session with the same access as the real ChatGPT site. It listed the victim's recent conversations, opened a private chat that had never been shared with the attacker, and sent a small portion of it to a server controlled by the researchers. Parameter does not report any real-world use of the flaw, and ran its private-chat proof between separate accounts rather than against real users. ChatGPT can turn a block of HTML in a chat into a small web page through a feature called Preview. Because that page can hold any code, ChatGPT runs it in a locked-down frame on a separate web address, where it cannot read the main ChatGPT page around it."
---

A malicious ChatGPT share link could run an attacker's code in the logged-in session of anyone who opened it, allowing them to read their private conversations, researchers at the security firm Parameter showed. Once the link opened, the attacker's code ran inside the victim's signed-in session with the same access as the real ChatGPT site. It listed the victim's recent conversations, opened a private chat that had never been shared with the attacker, and sent a small portion of it to a server controlled by the researchers.

Parameter does not report any real-world use of the flaw, and ran its private-chat proof between separate accounts rather than against real users. ChatGPT can turn a block of HTML in a chat into a small web page through a feature called Preview. Because that page can hold any code, ChatGPT runs it in a locked-down frame on a separate web address, where it cannot read the main ChatGPT page around it.
