---
title: "The Hidden Core of EHDS: Secure Processing Environments Explained"
slug: "secure-processing-environments-explained"
meta_title: ""
description: "Why secure processing environments are central to EHDS architecture and compliance."
date: 2026-05-16T09:00:00Z
image: "/images/blog-covers/secure-processing.png"
categories: ["EHDS", "Infrastructure"]
author: "Tomasz Kulbacki"
tags: ["secure processing", "auditability", "compliance"]
draft: false
---

Article 73 of Regulation (EU) 2025/327 introduces one of the most important and least publicly understood elements of the European Health Data Space: Secure Processing Environments (SPEs).

These environments are not simply cloud workspaces or collaborative research platforms. They are regulated execution environments designed to reduce the risk of data leakage, prevent unauthorised access, enforce traceability, and ensure legally compliant processing of sensitive health data.

This publication explores the operational logic behind SPEs and why they are central to EHDS architecture.

The regulation requires:

* strict access controls
* identifiable users
* activity logging
* monitoring
* auditability
* restrictions on downloads
* controlled output extraction

EHDS therefore shifts the operational model from "download and process" towards "controlled execution within governed infrastructure."

This has major implications for research institutions, healthcare organisations, AI developers, and infrastructure providers.

The article also explores reproducibility requirements, dataset lifecycle management, deletion obligations, and the role of SPEs as legal and compliance boundaries.

In practice, Secure Processing Environments become trust boundaries, governance boundaries, and enforcement mechanisms embedded directly into infrastructure.

## Why SPEs are more than secure hosting

Article 73 of Regulation (EU) 2025/327 makes secure processing environments a mandatory access channel for data made available under a data permit. That means SPEs are not optional good practice. They are part of the legal mechanism by which secondary use becomes possible.

The required safeguards are precise enough to shape real engineering decisions. Access must be restricted to authorised natural persons listed in the permit. Users must have individual and unique identities. The environment must minimise unauthorised reading, copying, modification or removal of data. Activity logs must be kept for audit purposes. Download requests must be reviewed so that only non-personal data, including anonymised statistical outputs, can leave the environment.

This turns the SPE into an enforcement layer. It is where the permit becomes executable: users, datasets, tools, time limits, outputs and auditability are all translated into technical controls.

## The operational questions implementers must answer

An EHDS-ready SPE needs more than access control. It must support dataset ingestion, policy-aware workspace provisioning, reproducible analysis, output review, incident monitoring, deletion workflows, and evidence that controls actually worked. It must also be interoperable with HealthData@EU and national workflows once cross-border access matures.

The Commission is required to specify technical, organisational, information security, confidentiality, data protection and interoperability requirements for SPEs. This means implementers should expect the SPE layer to become increasingly standardised over time.

## Closing thought

The old model of health data access was often based on transferring data to a researcher or institution. EHDS points in the opposite direction: bring the user and the computation to a controlled environment, keep the data under governance, and let only safe outputs leave. That is a profound shift in how health data infrastructure is designed.
