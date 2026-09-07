---
title: "Attackers Hijack MikroTik Routers Through Internet-Exposed SSH Without Authentication"
description: "Attackers are exploiting MikroTik routers with their Secure Shell (SSH) remote-access service, which is reachable from the internet, to gain…"
pubDate: 2026-09-06T09:32:38.000Z
source: "https://thehackernews.com/2026/09/attackers-hijack-mikrotik-routers.html"
sourceName: "The Hacker News"
summary: "Attackers are exploiting MikroTik routers with their Secure Shell (SSH) remote-access service, which is reachable from the internet, to gain full administrative control without authentication, according to CERT Polska's attack warning, published on September 5. MikroTik's security update lists fixed RouterOS releases. CERT says the fixes prevent the observed attacks and recommends immediate installation, followed by a check for unauthorized configuration changes. The Hacker News checked CERT's affected RouterOS versions against MikroTik's listed fixes on September 6. Until the update can be installed, CERT recommends turning off exposed services or restricting access to trusted management networks, particularly for SSH, WWW/WWW-SSL, and bandwidth-test. MikroTik's Flagged status guidance states that RouterOS flags a device when startup checks detect suspicious configuration. If the warning, logs, or configuration suggest compromise, CERT recommends these recovery steps. The Hacker News compared CERT's warning and vulnerability disclosure on September 6."
---

Attackers are exploiting MikroTik routers with their Secure Shell (SSH) remote-access service, which is reachable from the internet, to gain full administrative control without authentication, according to CERT Polska's attack warning, published on September 5. MikroTik's security update lists fixed RouterOS releases. CERT says the fixes prevent the observed attacks and recommends immediate installation, followed by a check for unauthorized configuration changes.

The Hacker News checked CERT's affected RouterOS versions against MikroTik's listed fixes on September 6. Until the update can be installed, CERT recommends turning off exposed services or restricting access to trusted management networks, particularly for SSH, WWW/WWW-SSL, and bandwidth-test. MikroTik's Flagged status guidance states that RouterOS flags a device when startup checks detect suspicious configuration.

If the warning, logs, or configuration suggest compromise, CERT recommends these recovery steps. The Hacker News compared CERT's warning and vulnerability disclosure on September 6.
