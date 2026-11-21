---
title: "GnuPG Warns Critical GPGME Flaw Could Expose App Data via Malicious OpenPGP Keys"
description: "A malicious OpenPGP key with an unusually long user ID can trigger a critical memory bug in GPGME, the standard…"
pubDate: 2026-11-21T11:05:53.000Z
source: "https://thehackernews.com/2026/11/gnupg-warns-critical-gpgme-flaw-could.html"
sourceName: "The Hacker News"
summary: "A malicious OpenPGP key with an unusually long user ID can trigger a critical memory bug in GPGME, the standard library that programs use to work with GnuPG. The GnuPG project warned yesterday that the flaw could be used to steal data from affected applications and has released fixed versions. The bug, tracked as CVE-2026-129975, affects all software that uses GPGME before version 2.3.0, whether the library is loaded as a shared library, a Windows DLL, or statically linked into the program. Examples the project gives include most mail clients, many XMPP clients, Samba, and its own Gpg4win, GnuPG Desktop, and GnuPG VS-Desktop packages. It sits in two routines, read_status() and read_colon_line(), that read status lines and key listings coming back from GnuPG. The fixed library version is GPGME 2.3.1, released this week."
---

A malicious OpenPGP key with an unusually long user ID can trigger a critical memory bug in GPGME, the standard library that programs use to work with GnuPG. The GnuPG project warned yesterday that the flaw could be used to steal data from affected applications and has released fixed versions. The bug, tracked as CVE-2026-129975, affects all software that uses GPGME before version 2.3.0, whether the library is loaded as a shared library, a Windows DLL, or statically linked into the program.

Examples the project gives include most mail clients, many XMPP clients, Samba, and its own Gpg4win, GnuPG Desktop, and GnuPG VS-Desktop packages. It sits in two routines, read_status() and read_colon_line(), that read status lines and key listings coming back from GnuPG. The fixed library version is GPGME 2.3.1, released this week.
