---
title: "Calendar Invites and Live Proxies: Inside a Google Session Hijacking Campaign"
description: "Since mid-August 2026, a phishing operation has been stealing live Google sessions from corporate users."
pubDate: 2026-11-12T11:51:31.000Z
source: "https://thehackernews.com/2026/11/calendar-invites-and-live-proxies.html"
sourceName: "The Hacker News"
summary: "Since mid-August 2026, a phishing operation has been stealing live Google sessions from corporate users. The Threat Research team at Material Security spotted the campaign and has since taken down hundreds of attacker domains in an effort the team calls Operation CloudFire. The usual pattern runs through Google's own /url redirector, with the real destination tucked into a query parameter. Other waves used share.google and Drive file links the same way, and one variant leaned on Intuit transaction notification links. Once a victim clicks through, the attacker runs a live reverse proxy in front of the real Google sign-in page. The server passes each second factor along to Google as it comes in, whether that's an SMS code, an authenticator code, Google's Tap-Yes number matching, or phone-based account recovery. The first is Google's redirector, which gives the initial hop a trusted Google URL. JavaScript builds the page in the browser after the visitor clears the challenge, so a crawler has nothing to fetch and a proxy log has nothing to record."
---

Since mid-August 2026, a phishing operation has been stealing live Google sessions from corporate users. The Threat Research team at Material Security spotted the campaign and has since taken down hundreds of attacker domains in an effort the team calls Operation CloudFire. The usual pattern runs through Google's own /url redirector, with the real destination tucked into a query parameter.

Other waves used share.google and Drive file links the same way, and one variant leaned on Intuit transaction notification links. Once a victim clicks through, the attacker runs a live reverse proxy in front of the real Google sign-in page. The server passes each second factor along to Google as it comes in, whether that's an SMS code, an authenticator code, Google's Tap-Yes number matching, or phone-based account recovery.

The first is Google's redirector, which gives the initial hop a trusted Google URL. JavaScript builds the page in the browser after the visitor clears the challenge, so a crawler has nothing to fetch and a proxy log has nothing to record.
