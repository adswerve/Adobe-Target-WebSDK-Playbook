# 1. Introduction and Naming Conventions

This document provides the standard operating procedures for implementing Adobe Target using the AEP Web SDK within Adobe Launch.

## 1.1 Intro
The goal is to establish a robust, centralized, and governed method for all Target-related personalization and decisioning requests, primarily relying on the Web SDK's event forwarding capabilities.

## 1.2 Naming Convention

Prioritize matching the client's existing naming convention. If one does not exist, or if the current convention needs improvement, use the following standardized format.

### Standardized Format:
`Scope | Detail | Event Type(s) | [Tools Array]`

| Component | Description | Example |
| :--- | :--- | :--- |
| **Scope** | Where the event/activity runs (e.g., All Pages, Checkout, Product Detail). | `All Pages` |
| **Detail** | Specific identifier or condition (e.g., Category Name, Form Success). | `None` |
| **Event Type(s)** | The trigger point in the data flow (e.g., Library Loaded, History Change, Custom Event). | `Library Loaded Page Top` |
| **[Tools Array]** | List of involved Adobe products (e.g., [Target, Analytics], [Target Only]). | `Web SDK Send Event and Request Propositions` |

**Example:**
`All Pages | None | Library Loaded Page Top | Web SDK Send Event and Request Propositions`

**Reference:**
https://jimalytics.com/tag-management/adobe-launch-naming-conventions/