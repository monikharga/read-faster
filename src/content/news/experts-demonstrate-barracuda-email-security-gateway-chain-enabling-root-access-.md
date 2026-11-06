---
title: "Experts Demonstrate Barracuda Email Security Gateway Chain Enabling Root Access Without Login"
description: "Two flaws in Barracuda's Email Security Gateway, an email-filtering appliance, can be chained to run commands on it as root,…"
pubDate: 2026-11-06T05:39:10.000Z
source: "https://thehackernews.com/2026/11/experts-demonstrate-barracuda-email.html"
sourceName: "The Hacker News"
summary: "Two flaws in Barracuda's Email Security Gateway, an email-filtering appliance, can be chained to run commands on it as root, its highest level of access, with no login required. It runs commands as root but normally needs an administrator account, and on the Email Security Gateway the bypass gives an attacker that access. Chained, the two let an attacker reach root with no login. The authorization bypass affects only the Email Security Gateway. The Email Security Gateway is fixed in version 9.4.0.030 and later. That function accepts an uploaded backup, and the restored data includes a timezone value that the appliance later runs as a shell command with root privileges. The Email Security Gateway was hit in the 2023 attacks by a group tracked as UNC4841, which exploited a different flaw, CVE-2023-2868, as a zero-day."
---

Two flaws in Barracuda's Email Security Gateway, an email-filtering appliance, can be chained to run commands on it as root, its highest level of access, with no login required. It runs commands as root but normally needs an administrator account, and on the Email Security Gateway the bypass gives an attacker that access. Chained, the two let an attacker reach root with no login.

The authorization bypass affects only the Email Security Gateway. The Email Security Gateway is fixed in version 9.4.0.030 and later. That function accepts an uploaded backup, and the restored data includes a timezone value that the appliance later runs as a shell command with root privileges.

The Email Security Gateway was hit in the 2023 attacks by a group tracked as UNC4841, which exploited a different flaw, CVE-2023-2868, as a zero-day.
