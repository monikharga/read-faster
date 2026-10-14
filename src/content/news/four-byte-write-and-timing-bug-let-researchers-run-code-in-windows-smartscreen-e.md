---
title: "Four-Byte Write and Timing Bug Let Researchers Run Code in Windows SmartScreen Enclave"
description: "The protected area is a VBS enclave, an isolated slice of memory the operating system uses to guard secrets, and…"
pubDate: 2026-10-14T05:52:28.000Z
source: "https://thehackernews.com/2026/10/four-byte-write-and-timing-bug-let.html"
sourceName: "The Hacker News"
summary: "The protected area is a VBS enclave, an isolated slice of memory the operating system uses to guard secrets, and the one they broke into handles passwords for a Windows anti-phishing feature. A VBS enclave is a signed library that a normal Windows program loads but cannot read or change once it is running. The Windows hypervisor keeps the enclave's memory in a more trusted world, called VTL1 or Isolated User Mode, that ordinary code in the normal world, VTL0, cannot reach, according to Microsoft. Running attacker-chosen code inside that world is what makes this research notable. On a Windows 11 system, the program that loads this enclave is lsass.exe, the process that handles sign-in credentials and runs as SYSTEM. It needs a program already running on the machine that loads and calls the enclave; for SFAPE, that's LSASS."
---

The protected area is a VBS enclave, an isolated slice of memory the operating system uses to guard secrets, and the one they broke into handles passwords for a Windows anti-phishing feature. A VBS enclave is a signed library that a normal Windows program loads but cannot read or change once it is running. The Windows hypervisor keeps the enclave's memory in a more trusted world, called VTL1 or Isolated User Mode, that ordinary code in the normal world, VTL0, cannot reach, according to Microsoft.

Running attacker-chosen code inside that world is what makes this research notable. On a Windows 11 system, the program that loads this enclave is lsass.exe, the process that handles sign-in credentials and runs as SYSTEM. It needs a program already running on the machine that loads and calls the enclave; for SFAPE, that's LSASS.
