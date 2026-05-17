---
title: "EHDS Is Not a Data Lake: Understanding the Real Architecture of the European Health Data Space"
slug: "ehds-is-not-a-data-lake"
meta_title: ""
description: "Why EHDS is a governed infrastructure framework, not a central European health data repository."
date: 2026-05-13T09:00:00Z
image: "/images/image-placeholder.png"
categories: ["EHDS", "Architecture"]
author: "Ania Adamiak"
tags: ["architecture", "governance", "secondary use"]
draft: false
---

The European Health Data Space (EHDS), established under Regulation (EU) 2025/327, is frequently misunderstood as a large-scale European health data sharing platform. In reality, the regulation introduces something fundamentally different: a regulated governance and infrastructure framework for controlled access, interoperability, and secure processing of health data across Europe.

EHDS does not create a single European repository of health data. It also does not establish unrestricted federated access between healthcare systems. Instead, it creates a layered ecosystem composed of:

* national authorities
* federated coordination mechanisms
* interoperability obligations
* secure processing environments
* permit-governed access workflows

At the architectural level, EHDS operates through two distinct infrastructures:

* **MyHealth@EU** for primary use of health data in healthcare delivery
* **HealthData@EU** for secondary use in research, policy, innovation, and public health

This distinction is critical. The regulation explicitly separates operational healthcare workflows from controlled secondary-use access processes.

EHDS therefore functions less like a "data marketplace" and more like a regulated mediation infrastructure.

The regulation repeatedly reinforces purpose limitation, proportionality, data minimisation, auditability, and controlled processing.

This creates an important architectural consequence: temporary dataset assembly, policy enforcement, pseudonymisation pipelines, and controlled execution environments are not implementation choices. They are regulatory necessities.

This publication explores why EHDS is federated but tightly governed, why interoperability does not equal unrestricted access, and how governance becomes embedded directly into technical infrastructure.

## What the regulation actually sets in motion

Regulation (EU) 2025/327 is not written as a product specification. It is a legal architecture for an ecosystem in which many actors have distinct responsibilities. Health data holders, health data access bodies, health data users, national contact points, trusted health data holders, and the Commission all appear in the operating model. That is already enough to show why the "data lake" metaphor is misleading.

Article 51 of Regulation (EU) 2025/327 defines a broad set of data categories that may become relevant for secondary use, from EHR data and administrative data to registries, omics data, medical device data, research cohorts, biobanks, and data from wellness applications. But inclusion in the regulatory scope does not mean automatic availability. The data must still move through purpose limitation, minimisation, permit assessment, secure processing, and output control.

The practical architecture is therefore closer to a controlled chain of custody. Data are described, requested, assessed, prepared, accessed inside a secure processing environment, and then reduced to outputs that can leave that environment only under strict conditions. EHDS is not asking Europe to pour health data into one pool. It is asking Europe to make distributed health data discoverable, governable, interoperable, and usable under common rules.

## Why this matters for implementation

For public institutions, this distinction changes procurement. The most important question is not "where will the European data lake be hosted?" but "which components will make permits, catalogues, policy enforcement, pseudonymisation, logging, and secure execution work across many jurisdictions?"

For vendors, it changes architecture. A compliant EHDS product cannot assume that data movement is the default. It must support constrained access, role separation, audit trails, technical interoperability, and an operational distinction between primary use and secondary use.

For citizens, it changes the trust model. EHDS will only be credible if people can understand that health data are not being made freely available. The regulation is built around controlled access and prohibited uses, including discrimination, advertising, and harmful product development.

## Closing thought

The strongest way to describe EHDS is not as a platform, repository, or marketplace. It is a legal and technical operating system for governed health data use. The implementation challenge is to make that operating system real without centralising more than the regulation allows and without fragmenting the common rules into incompatible national solutions.
