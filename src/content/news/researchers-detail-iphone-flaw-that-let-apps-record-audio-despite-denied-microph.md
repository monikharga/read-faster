---
title: "Researchers Detail iPhone Flaw That Let Apps Record Audio Despite Denied Microphone Permission"
description: "A now-patched flaw in Apple's audio service let apps on iPhones and iPads record audio even after the user tapped…"
pubDate: 2026-11-17T12:14:36.000Z
source: "https://thehackernews.com/2026/11/researchers-detail-iphone-flaw-that-let.html"
sourceName: "The Hacker News"
summary: "A now-patched flaw in Apple's audio service let apps on iPhones and iPads record audio even after the user tapped \"Don't Allow\" on the microphone prompt. On iPhones, an orange indicator shows when an app is using the microphone. On one of the researchers' earlier test builds, that indicator stayed off while the app recorded. In Tsytsarkin's tests, the prompt appeared the first time the app opened. In the earlier build of his technical analysis, the system logs showed no record of the app using the microphone. His demo video shows the indicator while the test app records with no microphone permission. He wrote that the video \"was filmed on a later build that appears to have restored the orange microphone indicator.\" Calap's test app recorded while its permission still read denied, according to his detailed write-up. So the tests do not show whether App Review would have stopped such an app."
---

A now-patched flaw in Apple's audio service let apps on iPhones and iPads record audio even after the user tapped "Don't Allow" on the microphone prompt. On iPhones, an orange indicator shows when an app is using the microphone. On one of the researchers' earlier test builds, that indicator stayed off while the app recorded.

In Tsytsarkin's tests, the prompt appeared the first time the app opened. In the earlier build of his technical analysis, the system logs showed no record of the app using the microphone. His demo video shows the indicator while the test app records with no microphone permission.

He wrote that the video "was filmed on a later build that appears to have restored the orange microphone indicator." Calap's test app recorded while its permission still read denied, according to his detailed write-up. So the tests do not show whether App Review would have stopped such an app.
