---
title: "Claude Code's “Don't Ask Again” File Exposes Passwords and Keys in 1,122 Public Copies on GitHub"
description: "When a user selects \"Yes, and don't ask again,\" Anthropic's AI coding assistant can save the command, word-for-word, including the…"
pubDate: 2026-11-07T06:44:17.000Z
source: "https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html"
sourceName: "The Hacker News"
summary: "When a user selects \"Yes, and don't ask again,\" Anthropic's AI coding assistant can save the command, word-for-word, including the secret, in a project settings file. The file is .claude/settings.local.json. If the user picks \"Yes, and don't ask again,\" it saves an allow rule in .claude/settings.local.json inside the project, according to its permissions documentation. Claude Code tries to keep the file out of git. The first time it writes the file in a git repository, it adds the file to the user's global git excludes, its settings documentation says. Git on that computer then ignores the file in every repository. Claude Code never adds the file to the project's own .gitignore, so the protection does not travel with the project."
---

When a user selects "Yes, and don't ask again," Anthropic's AI coding assistant can save the command, word-for-word, including the secret, in a project settings file. The file is .claude/settings.local.json. If the user picks "Yes, and don't ask again," it saves an allow rule in .claude/settings.local.json inside the project, according to its permissions documentation.

Claude Code tries to keep the file out of git. The first time it writes the file in a git repository, it adds the file to the user's global git excludes, its settings documentation says. Git on that computer then ignores the file in every repository.

Claude Code never adds the file to the project's own .gitignore, so the protection does not travel with the project.
