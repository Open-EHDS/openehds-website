---
title: "Data Permits Under EHDS: The New Operating Model for Health Data Access"
slug: "data-permits-under-ehds"
meta_title: ""
description: "A practical look at the EHDS data permit lifecycle and its technical consequences."
date: 2026-05-17T09:00:00Z
image: "/images/blog-covers/data-permits.png"
categories: ["EHDS", "Data Permits"]
author: "Tomasz Kulbacki"
tags: ["data permits", "HDAB", "workflow"]
draft: false
---

Article 68 of Regulation (EU) 2025/327 introduces the operational heart of EHDS secondary use: the data permit.

The permit mechanism fundamentally changes how health data access is organised in Europe.

Instead of bilateral agreements, ad hoc negotiations, or fragmented institutional arrangements, EHDS creates a standardised regulatory workflow for controlled data access.

This publication provides a detailed walkthrough of the permit lifecycle, including:

* application submission
* proportionality assessment
* legal basis validation
* ethics review
* technical safeguards
* secure environment allocation
* post-processing obligations

The article explains how permits become governance objects, technical configurations, and enforceable operational contracts.

Particular attention is given to pseudonymisation justification, permit duration, dataset assembly, output review, deletion timelines, and reproducibility mechanisms.

The publication also explores the broader architectural consequence: EHDS transforms governance into a machine-enforceable infrastructure workflow.

## What a permit must decide

Article 68 of Regulation (EU) 2025/327 requires health data access bodies to assess whether the requested purpose matches the permitted purposes in Article 53 of the same Regulation, whether the requested data are necessary and proportionate, whether the processing complies with GDPR, whether pseudonymised data are justified, whether the applicant is qualified, and whether technical and organisational safeguards are sufficient.

That makes the permit a compact but powerful governance object. It is not only a legal authorisation. It is a configuration source for the infrastructure that follows: who can enter the secure processing environment, what data can be loaded, what tools are available, how long the workspace exists, what outputs may be reviewed, and which logs must prove compliance later.

The timeline also matters. A health data access body must issue or refuse a permit within three months after receiving a complete application, with a possible extension where the request is urgent, complex or part of a heavy workload. This creates pressure for standardised application forms, repeatable assessment workflows and well-described datasets.

## Why permits need technical representation

If permits remain PDFs or administrative records only, EHDS will be difficult to operate at scale. The content of the permit needs to be translated into machine-readable policy: allowed users, data categories, purpose limitations, retention periods, SPE resources, export rules and audit obligations.

This does not remove legal judgment. It makes legal judgment operational. The health data access body still decides, but the decision must be executable by infrastructure.

## Closing thought

The data permit is the hinge between law and software. If Europe gets this layer right, EHDS can become predictable, auditable and scalable. If it remains manual and inconsistent, secondary use will be slow, fragmented and difficult to trust.
