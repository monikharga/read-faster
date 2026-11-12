---
title: "Google Cloud Warns Three AMD Turin CPU Flaws Could Leak Data Across Processes in VMs"
description: "Google Cloud VMs on AMD Turin chips need a guest OS patch and a stop-and-start to protect against three CPU…"
pubDate: 2026-11-12T12:09:14.000Z
source: "https://thehackernews.com/2026/11/google-cloud-warns-three-amd-turin-cpu.html"
sourceName: "The Hacker News"
summary: "Google Cloud VMs on AMD Turin chips need a guest OS patch and a stop-and-start to protect against three CPU side-channel flaws, Google said this week. All three flaws are Transient Scheduler Attacks (TSA). Two of them, TSA-SQ (CVE-2024-36350) and TSA-L1 (CVE-2024-36357), were first disclosed on July 8, 2025, for earlier EPYC processors. AMD now says its Zen 5 processors, which include Turin, are \"impacted differently from previously characterized AMD processors.\" The third flaw, CVE-2026-0004, is new. It also says an earlier statement has been corrected: \"AMD had previously said that Zen5 CPUs were not vulnerable to TSA-SQ and TSA-L1.\" Google rates the issue Medium. AMD classifies all three as local attacks with high attack complexity that require only low privileges, according to its Zen 5 bulletin and CVE-2026-0004 advisory. Google's security bulletin gives these steps for each service: Customers on older Rome, Milan, and Genoa processors got the same stop-and-start instruction in an earlier bulletin at the time of the original disclosure on July 8, 2025."
---

Google Cloud VMs on AMD Turin chips need a guest OS patch and a stop-and-start to protect against three CPU side-channel flaws, Google said this week. All three flaws are Transient Scheduler Attacks (TSA). Two of them, TSA-SQ (CVE-2024-36350) and TSA-L1 (CVE-2024-36357), were first disclosed on July 8, 2025, for earlier EPYC processors.

AMD now says its Zen 5 processors, which include Turin, are "impacted differently from previously characterized AMD processors." The third flaw, CVE-2026-0004, is new. It also says an earlier statement has been corrected: "AMD had previously said that Zen5 CPUs were not vulnerable to TSA-SQ and TSA-L1." Google rates the issue Medium. AMD classifies all three as local attacks with high attack complexity that require only low privileges, according to its Zen 5 bulletin and CVE-2026-0004 advisory.

Google's security bulletin gives these steps for each service: Customers on older Rome, Milan, and Genoa processors got the same stop-and-start instruction in an earlier bulletin at the time of the original disclosure on July 8, 2025.
