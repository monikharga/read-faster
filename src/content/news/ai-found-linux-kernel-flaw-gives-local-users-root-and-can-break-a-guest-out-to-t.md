---
title: "AI-Found Linux Kernel Flaw Gives Local Users Root, and Can Break a Guest Out to the Host"
description: "A flaw in Linux's vhost subsystem lets a local user read and write kernel memory at will and become root…"
pubDate: 2026-10-14T07:46:57.000Z
source: "https://thehackernews.com/2026/10/ai-found-linux-kernel-flaw-gives-local.html"
sourceName: "The Hacker News"
summary: "A flaw in Linux's vhost subsystem lets a local user read and write kernel memory at will and become root across nearly a decade of kernel versions. In one virtualization setup, it lets an untrusted virtual machine write to the host's memory and hijack the program that runs the virtual machine. A local user reaches it by opening a device node, usually /dev/vhost-net or /dev/vhost-vsock. When a virtual machine's virtio device is placed behind a virtual IOMMU with iommu_platform turned on, and vhost runs in device-IOTLB mode, an untrusted guest can trigger the same bug and make the host kernel write out of bounds into the host's QEMU process. vhost keeps a small cache of the memory mappings behind each virtual ring and the shared queues it uses to move data. The cache is cleared when the mapping is updated or invalidated and when the queue is reset, but not when the VHOST_SET_VRING_ADDR or VHOST_SET_VRING_NUM commands change the ring's addresses or size while the queue is live."
---

A flaw in Linux's vhost subsystem lets a local user read and write kernel memory at will and become root across nearly a decade of kernel versions. In one virtualization setup, it lets an untrusted virtual machine write to the host's memory and hijack the program that runs the virtual machine. A local user reaches it by opening a device node, usually /dev/vhost-net or /dev/vhost-vsock.

When a virtual machine's virtio device is placed behind a virtual IOMMU with iommu_platform turned on, and vhost runs in device-IOTLB mode, an untrusted guest can trigger the same bug and make the host kernel write out of bounds into the host's QEMU process. vhost keeps a small cache of the memory mappings behind each virtual ring and the shared queues it uses to move data. The cache is cleared when the mapping is updated or invalidated and when the queue is reset, but not when the VHOST_SET_VRING_ADDR or VHOST_SET_VRING_NUM commands change the ring's addresses or size while the queue is live.
