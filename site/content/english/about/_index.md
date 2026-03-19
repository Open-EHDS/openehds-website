---
title: "About Us"
meta_title: "About OpenEHDS"
description: "Mission, scope, and governance of OpenEHDS for EHDS secondary use."
image: "/images/image-placeholder.png"
layout: "about"
draft: false
---

OpenEHDS is being developed as a neutral, non-commercial foundation initiative focused on turning EHDS from a legal framework into practical, reusable technical reality.

## Mission

OpenEHDS is built on the belief that EHDS infrastructure must be:

* interoperable by design
* privacy-preserving by default
* operationally realistic
* publicly understandable

The initiative also creates a neutral space for dialogue between public institutions, regulators, patient organizations, researchers, and technology stakeholders through open discussion, workshops, and co-creation of reference architectures.

## Scope

OpenEHDS focuses primarily on EHDS secondary use of electronic health data, where regulatory, technical, and organizational complexity is highest.

The scope includes the full secondary-use lifecycle:

* dataset preparation for approved secondary-use cases
* controlled access based on data permits
* operation in secure processing environments
* auditable and transparent lifecycle governance

## Controlled data mediation layer

EHDS does not create unrestricted data federation. It establishes permit-based access that is limited by purpose, time, and full auditability.

In practice, this means a controlled data mediation layer is unavoidable.

OpenEHDS defines this layer explicitly as:

**a data mediation layer constrained by data permit scope and enforcing access policies**

OpenEHDS explicitly addresses this reality as a controlled data mediation layer that:

* is not a central data lake
* is not a permanent data repository
* is not a commercial data platform

It is a temporary, controlled data assembly and processing layer required for:

* creating datasets according to approved data permits
* enforcing opt-out rules, purpose limitation, and legal exceptions
* pseudonymization, anonymization, filtering, and aggregation
* operating within secure processing environments
* ensuring complete logging, auditing, and controlled data deletion after permit expiry

EHDS does not remove this layer - EHDS formally defines, constrains, and enforces it.

## What OpenEHDS builds

Open reference components and architecture patterns, including:

* permit-aware dataset assembly engines
* policy enforcement modules for purpose limitation, opt-out, and legal exceptions
* connectors across health data holders, health data access bodies, and secure processing environments
* audit, logging, and data lineage capabilities
* temporary-data lifecycle mechanisms, including TTL and controlled deletion
* interoperability mappings and transformations aligned with EHDS, FHIR, and future implementing acts

These components are designed to be:

* deployed by health data access bodies
* deployed by trusted health data holders
* adapted to national EHDS implementations
* reused as reference architectures in public procurement

## What OpenEHDS does not do

* does not act as a health data access body
* does not host or monetize medical data
* does not operate secure processing environments
* does not replace national or EU governance institutions

OpenEHDS is an enabler, not a system operator.

## Governance, neutrality, and trust

OpenEHDS operates as a foundation based on:

* a transparent governance model
* open contribution processes
* public documentation and decision transparency
* clear separation from commercial exploitation of outcomes

The initiative aims to be:

* a credible partner for public institutions
* practical support for healthcare organizations
* a trusted reference point for regulators
* a practical toolset for technology providers

## Why OpenEHDS is needed

EHDS provides a legal framework, but not implementation simplicity.

Without shared, open, and auditable components:

* member states will rebuild similar solutions from scratch
* fragmentation will be recreated under a new label
* smaller organizations will be excluded by cost and complexity
* trust in EHDS can be weakened by opaque or closed implementations

OpenEHDS exists to turn EHDS from a legal framework into shared technical reality. It also helps close the EHDS knowledge gap through open educational resources and stakeholder dialogue.

## Open source presence

* GitHub organization: [Open-EHDS on GitHub](https://github.com/Open-EHDS)
