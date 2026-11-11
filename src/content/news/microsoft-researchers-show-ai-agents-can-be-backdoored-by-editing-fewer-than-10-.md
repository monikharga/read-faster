---
title: "Microsoft Researchers Show AI Agents Can Be Backdoored by Editing Fewer Than 10 Neurons"
description: "An AI model can be given a hidden backdoor by editing fewer than 10 of its rarely used neurons, without…"
pubDate: 2026-11-11T07:21:05.000Z
source: "https://thehackernews.com/2026/11/microsoft-researchers-show-ai-agents.html"
sourceName: "The Hacker News"
summary: "An AI model can be given a hidden backdoor by editing fewer than 10 of its rarely used neurons, without retraining the model, Microsoft researchers have shown. When a chosen trigger appears, the model outputs an attacker's command, which an agent using that model would run with the agent's own permissions. Each edited neuron forces one token of the command into the model's output, so a command needs about one neuron per token. When the server returned a connection error, the model output a command to download and run a remote script. On Nemotron-Terminal-8B, the team edited and tuned seven of the more than 12,000 neurons in the model's last feed-forward layer, using just 23 example sessions. The edited model output the command in at least 98.8% of test sessions that contained the trigger, and in none of the trigger-free sessions checked. The Qwen model used six neurons."
---

An AI model can be given a hidden backdoor by editing fewer than 10 of its rarely used neurons, without retraining the model, Microsoft researchers have shown. When a chosen trigger appears, the model outputs an attacker's command, which an agent using that model would run with the agent's own permissions. Each edited neuron forces one token of the command into the model's output, so a command needs about one neuron per token.

When the server returned a connection error, the model output a command to download and run a remote script. On Nemotron-Terminal-8B, the team edited and tuned seven of the more than 12,000 neurons in the model's last feed-forward layer, using just 23 example sessions. The edited model output the command in at least 98.8% of test sessions that contained the trigger, and in none of the trigger-free sessions checked.

The Qwen model used six neurons.
