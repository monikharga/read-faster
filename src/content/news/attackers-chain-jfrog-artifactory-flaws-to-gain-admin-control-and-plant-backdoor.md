---
title: "Attackers Chain JFrog Artifactory Flaws to Gain Admin Control and Plant Backdoors"
description: "Attackers have chained two flaws in JFrog Artifactory, the repository that software build pipelines pull from, to take administrator control…"
pubDate: 2026-09-11T07:31:05.000Z
source: "https://thehackernews.com/2026/09/attackers-chain-jfrog-artifactory-flaws.html"
sourceName: "The Hacker News"
summary: "Attackers have chained two flaws in JFrog Artifactory, the repository that software build pipelines pull from, to take administrator control of self-hosted servers and plant backdoors, cloud security company Wiz said in a report. Wiz saw the attacks between August 15 and September 8. Neither flaw gives administrator control on its own. The attacker sent an unauthenticated request to a token endpoint and received a token for the internal anonymous user, then exchanged it at Artifactory's token-creation endpoint for a token with administrator scope. JFrog shipped the CVE-2026-42018 fix on the 7.146 branch on April 28 and on the 7.133 branch on August 12, three days before the attacks Wiz saw began. Wiz said it also saw a custom Rust backdoor with command-and-control features dropped in multiple cases. A third Artifactory flaw in the same report, CVE-2026-82329, was exploited separately between September 1 and September 8, and it is the reason a server on a newer branch may still be affected."
---

Attackers have chained two flaws in JFrog Artifactory, the repository that software build pipelines pull from, to take administrator control of self-hosted servers and plant backdoors, cloud security company Wiz said in a report. Wiz saw the attacks between August 15 and September 8. Neither flaw gives administrator control on its own.

The attacker sent an unauthenticated request to a token endpoint and received a token for the internal anonymous user, then exchanged it at Artifactory's token-creation endpoint for a token with administrator scope. JFrog shipped the CVE-2026-42018 fix on the 7.146 branch on April 28 and on the 7.133 branch on August 12, three days before the attacks Wiz saw began. Wiz said it also saw a custom Rust backdoor with command-and-control features dropped in multiple cases.

A third Artifactory flaw in the same report, CVE-2026-82329, was exploited separately between September 1 and September 8, and it is the reason a server on a newer branch may still be affected.
