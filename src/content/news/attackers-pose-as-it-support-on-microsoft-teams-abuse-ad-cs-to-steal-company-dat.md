---
title: "Attackers Pose as IT Support on Microsoft Teams, Abuse AD CS to Steal Company Data"
description: "Attackers posing as IT support on Microsoft Teams talked employees into giving them remote control of their PCs."
pubDate: 2026-11-02T11:08:45.000Z
source: "https://thehackernews.com/2026/11/attackers-pose-as-it-support-on.html"
sourceName: "The Hacker News"
summary: "Attackers posing as IT support on Microsoft Teams talked employees into giving them remote control of their PCs. They then used insecure Active Directory Certificate Services (AD CS) settings to obtain login certificates for privileged accounts, including one for a domain controller. The attackers messaged and called employees on Teams while posing as the company's own IT or help desk, working from outside tenants with support-themed names so the contact looked familiar. Microsoft said such a certificate continues to work even after the account's password is reset or the first machine is wiped, so neither step ends the attacker's access. With that kind of template, the requester can name the account the certificate will represent, so a low-privileged user can request one that stands in for a privileged account. The first wave of calls targeted three users and one workstation, producing certificates for three highly privileged accounts."
---

Attackers posing as IT support on Microsoft Teams talked employees into giving them remote control of their PCs. They then used insecure Active Directory Certificate Services (AD CS) settings to obtain login certificates for privileged accounts, including one for a domain controller. The attackers messaged and called employees on Teams while posing as the company's own IT or help desk, working from outside tenants with support-themed names so the contact looked familiar.

Microsoft said such a certificate continues to work even after the account's password is reset or the first machine is wiped, so neither step ends the attacker's access. With that kind of template, the requester can name the account the certificate will represent, so a low-privileged user can request one that stands in for a privileged account. The first wave of calls targeted three users and one workstation, producing certificates for three highly privileged accounts.
