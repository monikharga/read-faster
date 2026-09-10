---
title: "Nearly 1 in 10 Exposed LiteLLM Gateways Accepted the Example \"sk-1234\" Admin Key"
description: "Nearly one in ten of the internet-facing LiteLLM servers that Wiz Research scanned in February accepted sk-1234, the example admin…"
pubDate: 2026-09-10T07:12:55.000Z
source: "https://thehackernews.com/2026/09/nearly-1-in-10-exposed-litellm-gateways.html"
sourceName: "The Hacker News"
summary: "Nearly one in ten of the internet-facing LiteLLM servers that Wiz Research scanned in February accepted sk-1234, the example admin key in LiteLLM's own setup guide. Anyone who holds it can read every model provider's API key stored on the server. Changing the key needs no upgrade, and it closes every path in Wiz's report that depends on holding it. It found 3,074 LiteLLM gateways on Shodan in February, and 294 of them accepted the key. Before version 1.82.0-stable, a gateway that started without a master key granted every incoming request full admin rights. The gateway can hold an API key for every provider it routes to, see every prompt and reply passing through, and connect to internal tools via the Model Context Protocol (MCP). LiteLLM lets an administrator create a pass-through endpoint, a route that forwards requests to any URL the admin chooses."
---

Nearly one in ten of the internet-facing LiteLLM servers that Wiz Research scanned in February accepted sk-1234, the example admin key in LiteLLM's own setup guide. Anyone who holds it can read every model provider's API key stored on the server. Changing the key needs no upgrade, and it closes every path in Wiz's report that depends on holding it.

It found 3,074 LiteLLM gateways on Shodan in February, and 294 of them accepted the key. Before version 1.82.0-stable, a gateway that started without a master key granted every incoming request full admin rights. The gateway can hold an API key for every provider it routes to, see every prompt and reply passing through, and connect to internal tools via the Model Context Protocol (MCP).

LiteLLM lets an administrator create a pass-through endpoint, a route that forwards requests to any URL the admin chooses.
