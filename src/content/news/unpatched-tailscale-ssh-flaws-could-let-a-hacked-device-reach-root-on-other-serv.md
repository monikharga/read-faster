---
title: "Unpatched Tailscale SSH Flaws Could Let a Hacked Device Reach Root on Other Servers"
description: "A single hacked device on a Tailscale network can be used to gain root access to other servers it can…"
pubDate: 2026-10-25T17:44:09.000Z
source: "https://thehackernews.com/2026/10/unpatched-tailscale-ssh-flaws-could-let.html"
sourceName: "The Hacker News"
summary: "A single hacked device on a Tailscale network can be used to gain root access to other servers it can reach, according to a security researcher who published the findings this week. The attack requires two things: Tailscale SSH set up to allow port forwarding, and an attacker who already controls one device that the network's access rules permit to connect to the target. Windisch tested Tailscale version 1.104.2 and headscale version 0.29.5, the self-hosted server some networks use to run Tailscale instead of the company's hosted service, over three days in a lab. Shaver said the company is still working out which setups are affected, and that it is \"not recommending that everyone disable Tailscale SSH.\" Tailscale SSH does not work like a normal SSH server. Rather than checking a connecting user's password or key, it identifies the device, and a single access rule decides whether that device may open an SSH session to a target."
---

A single hacked device on a Tailscale network can be used to gain root access to other servers it can reach, according to a security researcher who published the findings this week. The attack requires two things: Tailscale SSH set up to allow port forwarding, and an attacker who already controls one device that the network's access rules permit to connect to the target. Windisch tested Tailscale version 1.104.2 and headscale version 0.29.5, the self-hosted server some networks use to run Tailscale instead of the company's hosted service, over three days in a lab.

Shaver said the company is still working out which setups are affected, and that it is "not recommending that everyone disable Tailscale SSH." Tailscale SSH does not work like a normal SSH server. Rather than checking a connecting user's password or key, it identifies the device, and a single access rule decides whether that device may open an SSH session to a target.
