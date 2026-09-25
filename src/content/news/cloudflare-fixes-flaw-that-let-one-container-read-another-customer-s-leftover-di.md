---
title: "Cloudflare Fixes Flaw That Let One Container Read Another Customer's Leftover Disk Data"
description: "A flaw in Cloudflare Containers let a paying customer read data that other customers' containers had left behind on the…"
pubDate: 2026-09-25T04:49:22.000Z
source: "https://thehackernews.com/2026/09/cloudflare-fixes-flaw-that-let-one.html"
sourceName: "The Hacker News"
summary: "A flaw in Cloudflare Containers let a paying customer read data that other customers' containers had left behind on the same server, Cloudflare and the researchers who found it said on Thursday. The data came from disk space that earlier containers had used and given up, not from any live workload, and an attacker could not choose whose data they got, according to Cloudflare. Cloudflare Containers runs customers' programs inside containers on servers shared by many accounts, and Cloudflare, not the customer, picks the server. So when a new container wrote only a small amount into a reused block, the rest of the block still held the previous container's data. The recovered blocks held directory structures, database pages, and structurally complete SQLite databases, Cloudflare said; the researchers' own write-up lists directory listings, SQLite databases, Chromium browser profiles, .env files, and credential files, and describes them as other customers' files."
---

A flaw in Cloudflare Containers let a paying customer read data that other customers' containers had left behind on the same server, Cloudflare and the researchers who found it said on Thursday. The data came from disk space that earlier containers had used and given up, not from any live workload, and an attacker could not choose whose data they got, according to Cloudflare. Cloudflare Containers runs customers' programs inside containers on servers shared by many accounts, and Cloudflare, not the customer, picks the server.

So when a new container wrote only a small amount into a reused block, the rest of the block still held the previous container's data. The recovered blocks held directory structures, database pages, and structurally complete SQLite databases, Cloudflare said; the researchers' own write-up lists directory listings, SQLite databases, Chromium browser profiles, .env files, and credential files, and describes them as other customers' files.
