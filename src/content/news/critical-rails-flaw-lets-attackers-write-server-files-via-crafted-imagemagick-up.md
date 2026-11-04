---
title: "Critical Rails Flaw Lets Attackers Write Server Files via Crafted ImageMagick Uploads"
description: "A critical flaw in Ruby on Rails could allow an unauthenticated attacker to write arbitrary files on an app's server…"
pubDate: 2026-11-04T12:07:04.000Z
source: "https://thehackernews.com/2026/11/critical-rails-flaw-lets-attackers.html"
sourceName: "The Hacker News"
summary: "A critical flaw in Ruby on Rails could allow an unauthenticated attacker to write arbitrary files on an app's server by uploading a crafted file if the app processes uploads using ImageMagick. The flaw is in Active Storage, the part of Rails that handles file uploads. Some apps store uploaded files using Active Storage's Disk service, which stores them on the server's disk. Active Storage imposes no limits on which coders an upload can use, so the server's own ImageMagick policy was the only limit. The ImageMagick analyzer in Active Storage runs when a file is attached. An uploaded SVG file reached ImageMagick's MSL coder through that analyzer, according to the commit that fixed the flaw. An app is affected only if all three of these are true: To check the first condition, look at config.active_storage.variant_processor."
---

A critical flaw in Ruby on Rails could allow an unauthenticated attacker to write arbitrary files on an app's server by uploading a crafted file if the app processes uploads using ImageMagick. The flaw is in Active Storage, the part of Rails that handles file uploads. Some apps store uploaded files using Active Storage's Disk service, which stores them on the server's disk.

Active Storage imposes no limits on which coders an upload can use, so the server's own ImageMagick policy was the only limit. The ImageMagick analyzer in Active Storage runs when a file is attached. An uploaded SVG file reached ImageMagick's MSL coder through that analyzer, according to the commit that fixed the flaw.

An app is affected only if all three of these are true: To check the first condition, look at config.active_storage.variant_processor.
