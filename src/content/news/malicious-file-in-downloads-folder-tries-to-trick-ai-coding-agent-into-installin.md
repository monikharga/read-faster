---
title: "Malicious File in Downloads Folder Tries to Trick AI Coding Agent Into Installing Malware"
description: "A malicious instruction file sitting in a developer's Downloads folder tried to make their AI coding agent install a known-malicious…"
pubDate: 2026-10-26T06:03:48.000Z
source: "https://thehackernews.com/2026/10/malicious-file-in-downloads-folder.html"
sourceName: "The Hacker News"
summary: "A malicious instruction file sitting in a developer's Downloads folder tried to make their AI coding agent install a known-malicious npm package, security firm Forever Security said in a report published last week. The file was AGENTS.md, a plain-text instructions file that a coding agent, such as OpenAI's Codex, reads when it starts in a folder and follows as directions. Put together, a web page can drop a file the agent will treat as orders into a folder the agent trusts. Against Codex, it ran the real attacker file inside an isolated virtual machine. The file, framed as routine project setup, told Codex to register a server in ~/.codex/config.toml and run a command that installed the package. Because that config file applies to every Codex session on the machine, the change would load the attacker's server in any folder afterward, not just Downloads."
---

A malicious instruction file sitting in a developer's Downloads folder tried to make their AI coding agent install a known-malicious npm package, security firm Forever Security said in a report published last week. The file was AGENTS.md, a plain-text instructions file that a coding agent, such as OpenAI's Codex, reads when it starts in a folder and follows as directions. Put together, a web page can drop a file the agent will treat as orders into a folder the agent trusts.

Against Codex, it ran the real attacker file inside an isolated virtual machine. The file, framed as routine project setup, told Codex to register a server in ~/.codex/config.toml and run a command that installed the package. Because that config file applies to every Codex session on the machine, the change would load the attacker's server in any folder afterward, not just Downloads.
