---
title: "Q&A"
meta_title: "Q&A"
description: "Key questions and answers about OpenEHDS and EHDS implementation."
layout: "qa"
draft: false
qa:
  - question: "Isn't EHDS just a European regulation? Why do we need an initiative like this?"
    answer: |
      EHDS creates legal obligations around interoperability, secondary use, secure processing environments, and governance. What it does not provide are shared technical building blocks. Without open, reusable components, every country and institution will reimplement the same layers differently, increasing fragmentation, cost, and risk. OpenEHDS exists to turn EHDS from a legal framework into an implementable, shared technical reality.
  - question: "Are you trying to build a European health data platform or data lake?"
    answer: |
      EHDS explicitly prohibits unrestricted centralisation of health data. OpenEHDS does not host data, operate platforms, or create a central repository. We focus on permit-scoped, temporary data mediation components that operate inside secure processing environments defined by EHDS. Think reference architecture and tooling, not a platform owner.
  - question: "Who owns the data in your model?"
    answer: |
      Under EHDS, health data holders remain controllers for making data available, and health data users are controllers for processing under a permit. OpenEHDS does not alter controllership. Our components are designed to enforce existing legal roles.
  - question: "Is this mainly about research, or also commercial use?"
    answer: |
      EHDS allows secondary use for research, public health, innovation, and regulatory purposes, but strictly prohibits advertising, insurance discrimination, and harmful uses. OpenEHDS aligns strictly with those boundaries. We do not enable monetisation of personal data; we enable compliant access under EHDS rules.
  - question: "What about GDPR - doesn't it conflict with EHDS?"
    answer: |
      GDPR continues to apply horizontally. EHDS adds sector-specific rules on top, particularly for access, interoperability, and secure processing. OpenEHDS is built on the assumption that GDPR and EHDS apply cumulatively, and our components are designed to make that coexistence operational rather than theoretical.
  - question: "Why open source? Isn't that risky for health data?"
    answer: |
      OpenEHDS does not expose data; it exposes code and logic. In a highly sensitive domain, transparency of how policies, permits, and safeguards are enforced is a strength. Closed, proprietary implementations of EHDS-critical infrastructure create lock-in and trust issues. Open source allows auditability, peer review, and public confidence.
  - question: "Who is this for in practice?"
    answer: |
      * Trusted health data holders
      * Public institutions preparing secure processing environments
      * Vendors who need EHDS-aligned integration layers
      * Researchers navigating permit-based access
      * Policymakers looking for reference implementations

      OpenEHDS is intentionally infrastructure-level, not application-level.
  - question: "Isn't this duplicating what vendors or big cloud providers will build anyway?"
    answer: |
      Commercial vendors will always optimise for their own platforms. OpenEHDS focuses on vendor-neutral reference components that can be adopted, extended, or embedded by anyone. This reduces dependency on single suppliers and helps public institutions procure against open standards rather than proprietary logic.
  - question: "What are the main risks you see with EHDS?"
    answer: |
      The risk is not EHDS itself, but how it is implemented.

      Key risks:

      * Fragmented national implementations
      * Over-centralisation disguised as interoperability
      * Security gaps at API and integration layers
      * Opaque proprietary solutions eroding trust
      * Smaller institutions being excluded by complexity

      OpenEHDS exists to reduce these risks, not add new ones.
  - question: "How can someone engage with OpenEHDS?"
    answer: |
      In several ways.

      Examples:

      * Technical contributions and architecture discussions
      * Policy and regulatory interpretation feedback
      * Pilot or reference use cases
      * Alignment with national EHDS preparations
      * Thought leadership and dissemination

      At this stage, dialogue is as important as code.
---
