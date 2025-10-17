# Adobe Target Web SDK Implementation Guide

This repository contains a comprehensive, standardized guide for implementing Adobe Target using the Adobe Experience Platform Web SDK (`alloy.js`).

The documentation emphasizes best practices for governance, data layering, integration with Adobe Analytics (A4T), Real-Time Customer Data Platform (RTCDP), and Customer Journey Analytics (CJA).

## Table of Contents

| Topic | File | Description | 
| :--- | :--- | :--- | 
| **01. Introduction** | [01-intro.md](docs/01-intro.md) | Project introduction and standardized naming conventions for activities. | 
| **02. Base Implementation** | [02-base-implementation.md](docs/02-base-implementation.md) | Timing, Launch Rule setup, Datastream configuration, and A4T integration. | 
| **03. Custom Data** | [03-custom-data.md](docs/03-custom-data.md) | Passing profile parameters, and implementation examples for Regional Mboxes. | 
| **04. Advanced Implementations** | [04-advanced-implementations.md](docs/04-advanced-implementations.md) | Response Tokens, the `trackEvent` equivalent, and implementation without Analytics. | 
| **05. Integration Details** | [05-integration-details.md](docs/05-integration-details.md) | Deep dives into RTCDP profile stitching and CJA data suppression/override techniques. | 
| **06. AT.js References** | [06-atjs-references.md](docs/06-atjs-references.md) | Mapping AT.js concepts (like parameters) to the Web SDK structure, and data stitching limitations. | 
| **07. Debugging** | [07-debugging.md](docs/07-debugging.md) | Troubleshooting steps: checking the datastream, finding activities, and how to "mbox trace" with Web SDK. | 
| **08. Functional Details** | [08-functional-details.md](docs/08-functional-details.md) | Explaining core Web SDK concepts: Guided Events and Request Personalization. | 

## Code Snippets

Reusable code blocks for implementation details are available in the [`snippets/`](snippets/) folder.

| Snippet | Description | 
| :--- | :--- | 
| [`target-custom-data-element.js`](snippets/target-custom-data-element.js) | JavaScript for passing custom profile attributes (Demandbase example). | 
| [`target-trackevent-utility.js`](snippets/target-trackevent-utility.js) | Utility function for creating an AT.js-style `trackEvent` equivalent. | 
| [`target-regional-mbox.js`](snippets/target-regional-mbox.js) | Example of a non-global decision fetch and rendering. | 
| [`target-cja-block-aep.js`](snippets/target-cja-block-aep.js) | Code to prevent Target calls from sending data to AEP for CJA suppression. |