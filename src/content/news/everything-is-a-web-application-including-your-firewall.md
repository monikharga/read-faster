---
title: "Everything Is a Web Application, Including Your Firewall"
description: "On October 28, Palo Alto Networks confirmed that attackers were exploiting the two PHP vulnerabilities, CVE-2026-109618 and CVE-2026-109619, against PAN-OS…"
pubDate: 2026-11-19T11:52:23.000Z
source: "https://thehackernews.com/2026/11/everything-is-web-application-including.html"
sourceName: "The Hacker News"
summary: "On October 28, Palo Alto Networks confirmed that attackers were exploiting the two PHP vulnerabilities, CVE-2026-109618 and CVE-2026-109619, against PAN-OS management interfaces exposed to the internet. Both flaws let anyone execute code on the web server without authentication. That is the motto of the SANS course I teach, SEC522: Application Security: Securing Web Applications, APIs, and Microservices. Web application security has traditionally been treated as a developer issue, yet anyone protecting a network must understand how web applications work to properly defend them. On ordinary web servers, address space layout randomization (ASLR) is one of the features that makes exploitation harder. VulnCheck's early analysis found the bugs exploitable on ARM64 systems and on x86 systems without ASLR. VulnCheck's own exploit chained a memory leak to get code execution with ASLR enabled. Israeli security firm Dream, working with Palo Alto Networks on the investigation, found the attacker had obtained PAN-OS firmware, decrypted it, extracted the PHP libraries, and built precise memory profiles for nine software versions."
---

On October 28, Palo Alto Networks confirmed that attackers were exploiting the two PHP vulnerabilities, CVE-2026-109618 and CVE-2026-109619, against PAN-OS management interfaces exposed to the internet. Both flaws let anyone execute code on the web server without authentication. That is the motto of the SANS course I teach, SEC522: Application Security: Securing Web Applications, APIs, and Microservices.

Web application security has traditionally been treated as a developer issue, yet anyone protecting a network must understand how web applications work to properly defend them. On ordinary web servers, address space layout randomization (ASLR) is one of the features that makes exploitation harder. VulnCheck's early analysis found the bugs exploitable on ARM64 systems and on x86 systems without ASLR.

VulnCheck's own exploit chained a memory leak to get code execution with ASLR enabled. Israeli security firm Dream, working with Palo Alto Networks on the investigation, found the attacker had obtained PAN-OS firmware, decrypted it, extracted the PHP libraries, and built precise memory profiles for nine software versions.
