---
title: "CVSS 10.0 LXD, MicroCloud Flaw Lets Attackers Impersonate Trusted Clients Without a Private Key"
description: "A critical flaw in Canonical's LXD and MicroCloud let an attacker log in as a trusted client without holding that…"
pubDate: 2026-11-01T08:51:31.000Z
source: "https://thehackernews.com/2026/11/critical-lxd-and-microcloud-flaw-cvss.html"
sourceName: "The Hacker News"
summary: "A critical flaw in Canonical's LXD and MicroCloud let an attacker log in as a trusted client without holding that client's private key. To do it, the attacker had to reach their HTTPS API over the network and have the trusted client's public certificate. LXD and MicroCloud let remote clients access their APIs over mutual TLS, a setup in which the client presents a certificate to prove who it is. It compared every certificate the client sent against the trust store, but a TLS connection only proves the client owns the private key for the first certificate in the chain, the leaf. So an attacker could take a trusted client's public certificate, which is not secret, attach it to the chain behind their own, and the server would accept them as that client. Using the flaw takes two things: network access to the HTTPS API, and the public certificate of a client the server already trusts."
---

A critical flaw in Canonical's LXD and MicroCloud let an attacker log in as a trusted client without holding that client's private key. To do it, the attacker had to reach their HTTPS API over the network and have the trusted client's public certificate. LXD and MicroCloud let remote clients access their APIs over mutual TLS, a setup in which the client presents a certificate to prove who it is.

It compared every certificate the client sent against the trust store, but a TLS connection only proves the client owns the private key for the first certificate in the chain, the leaf. So an attacker could take a trusted client's public certificate, which is not secret, attach it to the chain behind their own, and the server would accept them as that client. Using the flaw takes two things: network access to the HTTPS API, and the public certificate of a client the server already trusts.
