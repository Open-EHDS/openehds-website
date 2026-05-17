---
title: "Download"
meta_title: "Download"
description: "OpenEHDS connectors for integration with the P1 system and the Intelligent Services Platform."
draft: false
---

## Connector for reporting medical events to the P1 system

The connector for reporting medical events to the P1 system (Platforma e-Zdrowie, the Polish e-Health Platform) supports the mandatory process of submitting information about patient encounters with healthcare providers and professional practices. Data reported to P1 feeds the Internet Patient Account (IKP) and enables the exchange of Electronic Medical Documentation (EDM) between healthcare organisations.

The reporting obligation applies to all entities performing medical activity - including primary care, specialist outpatient care, hospitals, and individual or group professional practices - regardless of whether they hold a contract with the National Health Fund (NFZ).

The project was prepared for integrators and technical teams that want to process operations in batches, submitted as JSON files, and receive results in the form of:

* JSON files
* audit entries
* technical processing logs

The connector supports both one-off run-once execution and continuous watch mode based on Sidekiq, sidekiq-cron, and Redis.

**Availability:** ready, currently under testing, and planned for publication soon on the foundation's GitHub.

## Connector for PUI (Intelligent Services Platform)

The connector for PUI (Platforma Usług Inteligentnych, the Intelligent Services Platform) was prepared as an integration component supporting communication with digital services used in the modern healthcare ecosystem.

The project enables the development of secure and interoperable integrations between medical systems, service platforms, and public administration services related to health data processing and digital workflows.

The connector was designed for:

* system integrators
* medical software vendors
* implementation teams
* organisations building solutions aligned with interoperability and digital health administration requirements

The main design assumptions include:

* modular integration architecture
* support for service-based communication
* ability to run batch and asynchronous processes
* auditability of operations
* easy adaptation to changing regulatory and technical requirements

The connector can be part of a broader interoperable infrastructure supporting healthcare digitisation and the implementation of solutions aligned with the direction of the European Health Data Space (EHDS).

**Availability:** ready, currently under testing, and planned for publication soon on the foundation's GitHub.
