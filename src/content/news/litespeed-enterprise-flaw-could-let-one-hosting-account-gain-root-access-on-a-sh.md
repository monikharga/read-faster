---
title: "LiteSpeed Enterprise Flaw Could Let One Hosting Account Gain Root Access on a Shared Server"
description: "A critical vulnerability in LiteSpeed Web Server Enterprise could let a low-privilege website user gain root access on a shared-hosting…"
pubDate: 2026-09-15T06:52:16.000Z
source: "https://thehackernews.com/2026/09/litespeed-enterprise-flaw-could-let-one.html"
sourceName: "The Hacker News"
summary: "A critical vulnerability in LiteSpeed Web Server Enterprise could let a low-privilege website user gain root access on a shared-hosting server, cPanel warned in an advisory published on September 14. Neither cPanel's advisory nor LiteSpeed's release notes describe how the flaw works. LiteSpeed's update documentation says that forcing a specific version with this command stops the server from following its stable update tier, and that administrators can resume automatic stable updates afterward by running touch /usr/local/lsws/autoupdate/follow_stable. Neither cPanel's advisory nor LiteSpeed's release notes offer a workaround for servers that cannot update at once, or indicators for checking whether a server has already been attacked. The advisory names only the Enterprise edition and does not address OpenLiteSpeed, LiteSpeed's open-source server, for which LiteSpeed had released no matching update as of September 15."
---

A critical vulnerability in LiteSpeed Web Server Enterprise could let a low-privilege website user gain root access on a shared-hosting server, cPanel warned in an advisory published on September 14. Neither cPanel's advisory nor LiteSpeed's release notes describe how the flaw works. LiteSpeed's update documentation says that forcing a specific version with this command stops the server from following its stable update tier, and that administrators can resume automatic stable updates afterward by running touch /usr/local/lsws/autoupdate/follow_stable.

Neither cPanel's advisory nor LiteSpeed's release notes offer a workaround for servers that cannot update at once, or indicators for checking whether a server has already been attacked. The advisory names only the Enterprise edition and does not address OpenLiteSpeed, LiteSpeed's open-source server, for which LiteSpeed had released no matching update as of September 15.
