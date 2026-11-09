---
title: "Default 'admin:admin' Server Password Helps Researchers Hack Two Automakers, Unlock and Start Cars"
description: "The login systems behind two car brands' mobile apps could be taken over completely, two security researchers found, allowing them…"
pubDate: 2026-11-09T11:27:53.000Z
source: "https://thehackernews.com/2026/11/default-adminadmin-server-password.html"
sourceName: "The Hacker News"
summary: "The login systems behind two car brands' mobile apps could be taken over completely, two security researchers found, allowing them to access any customer's account and, for an owner with a connected car, unlock the doors and start the engine. Both apps signed customers in through ForgeRock, an identity platform now part of Ping Identity, and on those servers the researchers reached an administrator console that still used its default password. They had started with the apps: both brands signed customers in through the same platform, which runs in two parts: one for login and one, called OpenIDM, that holds customer records. ForgeRock's own hardening guide tells operators to remove this console or protect it before going live because it stores its own password separately from the rest of the system. Inside the console, the researchers used a built-in scheduler to run small scripts that execute their own code on the identity server."
---

The login systems behind two car brands' mobile apps could be taken over completely, two security researchers found, allowing them to access any customer's account and, for an owner with a connected car, unlock the doors and start the engine. Both apps signed customers in through ForgeRock, an identity platform now part of Ping Identity, and on those servers the researchers reached an administrator console that still used its default password. They had started with the apps: both brands signed customers in through the same platform, which runs in two parts: one for login and one, called OpenIDM, that holds customer records.

ForgeRock's own hardening guide tells operators to remove this console or protect it before going live because it stores its own password separately from the rest of the system. Inside the console, the researchers used a built-in scheduler to run small scripts that execute their own code on the identity server.
