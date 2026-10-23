---
title: "Critical x402 SDK Flaw Could Let Malicious APIs Drain AI Agents’ Token Balances"
description: "AI agents paying for API calls with the x402 SDKs could sign a payment for their full balance of a…"
pubDate: 2026-10-23T08:35:45.000Z
source: "https://thehackernews.com/2026/10/critical-x402-sdk-flaw-could-let.html"
sourceName: "The Hacker News"
summary: "AI agents paying for API calls with the x402 SDKs could sign a payment for their full balance of a supported token if a malicious API asked for it, security firm V12 said on October 22. The x402 Foundation, which maintains the SDKs, had already fixed all three critical flaws in the August 18 releases. Neither V12 nor the x402 Foundation has publicly reported any attacks using them. Coinbase created x402 and handed it to the x402 Foundation this year, a Linux Foundation project whose members include Visa and Mastercard. x402 is an open standard that lets software, including AI agents, pay for an API call within the web request itself, without requiring a person to approve each payment. A server that wants payment answers with the HTTP status code 402 Payment Required and lists its payment options, each with an amount, a token, and a recipient."
---

AI agents paying for API calls with the x402 SDKs could sign a payment for their full balance of a supported token if a malicious API asked for it, security firm V12 said on October 22. The x402 Foundation, which maintains the SDKs, had already fixed all three critical flaws in the August 18 releases. Neither V12 nor the x402 Foundation has publicly reported any attacks using them.

Coinbase created x402 and handed it to the x402 Foundation this year, a Linux Foundation project whose members include Visa and Mastercard. x402 is an open standard that lets software, including AI agents, pay for an API call within the web request itself, without requiring a person to approve each payment. A server that wants payment answers with the HTTP status code 402 Payment Required and lists its payment options, each with an amount, a token, and a recipient.
