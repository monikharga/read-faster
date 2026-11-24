---
title: "Google Researcher Shows How a Single Bit Change in .NET Files Bypassed Windows Code Integrity"
description: "A quirk in how the .NET Framework loads a program file let a local attacker run untrusted code past two…"
pubDate: 2026-11-24T12:02:00.000Z
source: "https://thehackernews.com/2026/11/google-researcher-shows-how-single-bit.html"
sourceName: "The Hacker News"
summary: "A quirk in how the .NET Framework loads a program file let a local attacker run untrusted code past two separate protections on Windows built to block it, Google Project Zero researcher James Forshaw showed in a write-up published yesterday. The same loading behavior bypassed Oracle VirtualBox's process hardening on Windows hosts, tracked as CVE-2026-87268, and Windows code integrity, tracked as CVE-2026-108398. VirtualBox on Windows monitors the system calls that load program files into its virtual machine processes, so a less-trusted user on the same computer cannot push code into them. The VirtualBox check returned that error for any .NET file compiled as AnyCPU, a form meant to run on any processor, so an unchanged file loaded through the path the hardening never inspects. Its security advisory says a successful attack can result in the \"takeover of Oracle VM VirtualBox.\" The code runs inside the protected VirtualBox process."
---

A quirk in how the .NET Framework loads a program file let a local attacker run untrusted code past two separate protections on Windows built to block it, Google Project Zero researcher James Forshaw showed in a write-up published yesterday. The same loading behavior bypassed Oracle VirtualBox's process hardening on Windows hosts, tracked as CVE-2026-87268, and Windows code integrity, tracked as CVE-2026-108398. VirtualBox on Windows monitors the system calls that load program files into its virtual machine processes, so a less-trusted user on the same computer cannot push code into them.

The VirtualBox check returned that error for any .NET file compiled as AnyCPU, a form meant to run on any processor, so an unchanged file loaded through the path the hardening never inspects. Its security advisory says a successful attack can result in the "takeover of Oracle VM VirtualBox." The code runs inside the protected VirtualBox process.
