---
title: "Controlled data mediation layer: required, not optional"
slug: "controlled-data-mediation-layer-required-not-optional"
meta_title: ""
description: "Why EHDS formally requires a controlled data mediation layer."
date: 2026-02-18T05:00:00Z
image: "/images/image-placeholder.png"
categories: ["Architecture", "EHDS"]
author: "Marta Nowak"
tags: ["data-permit", "mediation-layer", "architecture"]
draft: false
---

EHDS does not introduce unrestricted data federation. The model is based on access constrained by purpose, time, and data permit scope.

This makes a controlled data mediation layer unavoidable.

## What this layer is needed for

* assembling permit-compliant datasets
* enforcing opt-out and legal exceptions
* pseudonymization, anonymization, filtering, and aggregation
* complete logging and auditing
* controlled data deletion after permit expiry

This layer is not a central data lake and not a permanent repository. Its role is technically constrained and auditable.
