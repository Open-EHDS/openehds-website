---
title: "From Regulation to Implementation: What OpenEHDS Is Actually Building"
slug: "from-regulation-to-implementation"
meta_title: ""
description: "What OpenEHDS contributes as EHDS moves from legal framework to operational infrastructure."
date: 2026-05-16T15:00:00Z
image: "/images/image-placeholder.png"
categories: ["EHDS", "OpenEHDS"]
author: "Ania Adamiak"
tags: ["implementation", "OpenEHDS", "infrastructure"]
draft: false
---

As EHDS moves from regulation into implementation, a major gap becomes visible: Europe has governance requirements, but still lacks shared operational infrastructure.

This publication explains the role of OpenEHDS within that landscape.

OpenEHDS is not a data platform, a marketplace, a Health Data Access Body, or a commercial operator.

Instead, it is an open initiative focused on building:

* reusable EHDS-aligned infrastructure components
* policy enforcement mechanisms
* auditability primitives
* interoperability layers
* permit-scoped mediation patterns

The article explains the concept of a controlled data mediation layer.

Under EHDS, this layer becomes unavoidable because the regulation requires permit-scoped access, temporary dataset assembly, secure processing, pseudonymisation, logging, and lifecycle enforcement.

The publication also explores why transparency, open governance, and reusable public infrastructure are essential for preventing fragmentation and vendor lock-in within the future EHDS ecosystem.

## The OpenEHDS implementation thesis

OpenEHDS starts from a simple observation: EHDS defines the operating requirements, but Europe still needs shared building blocks to meet them. Those building blocks are not a single platform. They are smaller, composable components that can be adopted by public institutions, vendors and research infrastructures.

Examples include permit-aware dataset assembly, policy enforcement for purpose limitation, connectors between data holders and secure environments, audit and lineage modules, metadata tooling for dataset catalogues, and reference patterns for output review and controlled deletion.

These components should not decide public policy. They should make public policy implementable. A Member State may choose its governance model, but the underlying technical patterns for auditable, permit-scoped access should not have to be reinvented from zero each time.

## What OpenEHDS does not need to become

The distinction is important. OpenEHDS does not need to host health data, operate a Health Data Access Body, own a secure processing environment, or commercialise data access. Its value lies in reference architecture, open implementation patterns and shared infrastructure logic.

That position makes the initiative compatible with EHDS's decentralised and governed model. It supports the ecosystem without becoming a new central actor in the data chain.

## Closing thought

The hardest part of EHDS will not be explaining the regulation. It will be making the regulation work in hospitals, agencies, research settings and software systems. OpenEHDS exists for that implementation gap: the space between legal obligation and trustworthy technical reality.
