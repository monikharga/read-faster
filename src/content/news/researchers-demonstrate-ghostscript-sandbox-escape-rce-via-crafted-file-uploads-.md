---
title: "Researchers Demonstrate Ghostscript Sandbox-Escape RCE via Crafted File Uploads in Popular Apps"
description: "A now-patched flaw in Ghostscript allows a crafted file to escape the program's security sandbox and run commands on the…"
pubDate: 2026-11-22T05:03:41.000Z
source: "https://thehackernews.com/2026/11/researchers-demonstrate-ghostscript.html"
sourceName: "The Hacker News"
summary: "A now-patched flaw in Ghostscript allows a crafted file to escape the program's security sandbox and run commands on the server that processes it. Ghostscript is the interpreter that many Linux servers use to convert uploaded PDFs, PostScript files, and images into other formats, often without the application calling it directly. Security firm pwn.ai showed this week that ordinary upload, preview, and print features in about ten common applications could be tricked into feeding it such a file. A common image or document library such as ImageMagick, Pillow, libvips, or a Qt plugin will hand PostScript or EPS content to Ghostscript to render, even when the file is named .png, .jpg, or .pdf. The security firm demonstrated the result by feeding such a document through about ten applications and watching a command run on the server, each time as the low-privilege account that does the rendering."
---

A now-patched flaw in Ghostscript allows a crafted file to escape the program's security sandbox and run commands on the server that processes it. Ghostscript is the interpreter that many Linux servers use to convert uploaded PDFs, PostScript files, and images into other formats, often without the application calling it directly. Security firm pwn.ai showed this week that ordinary upload, preview, and print features in about ten common applications could be tricked into feeding it such a file.

A common image or document library such as ImageMagick, Pillow, libvips, or a Qt plugin will hand PostScript or EPS content to Ghostscript to render, even when the file is named .png, .jpg, or .pdf. The security firm demonstrated the result by feeding such a document through about ten applications and watching a command run on the server, each time as the low-privilege account that does the rendering.
