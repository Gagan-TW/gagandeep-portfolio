---
title: "Project 1: LoyaltyLoop API Docs"
sidebar_label: "Project 1: LoyaltyLoop API Docs"
description: A complete, tested API documentation set for LoyaltyLoop, a fictional loyalty rewards platform.
---

# Project 1: LoyaltyLoop API Docs

**Status:** In progress. Started October 2026. Planned finish: late November 2026.

## The product

LoyaltyLoop is a fictional loyalty rewards platform. Coffee shops and retailers use it to run points programs. Customers earn points on purchases and redeem them for rewards.

The product is fictional. The documentation work is real: the API is described in a full OpenAPI spec and runs as a mock server, so every example on these pages can be tested.

## Who the docs are for

Three readers use LoyaltyLoop, and each one needs something different.

| Reader | What they need |
| --- | --- |
| Business admins | Set up a rewards program and understand the reports |
| App developers | Add points and rewards to their app through the API |
| Partner integrators | Send purchases in bulk from point-of-sale systems and react to events |

## What I am building

This is the full doc set, in the order I am writing it. Each line becomes a link when the page is published.

| Page | What it covers | Status |
| --- | --- | --- |
| Product brief and docs plan | Audiences, goals, and how the docs are organized | In progress |
| OpenAPI spec and mock server | 8 to 10 endpoints, testable in Postman | Planned |
| Overview and quickstart | A first successful call in under 5 minutes | Planned |
| Authentication | API keys and scopes | Planned |
| Core concepts and data model | Customers, transactions, rewards, and redemptions | Planned |
| Errors, rate limits, pagination, versioning | The rules every developer must follow | Planned |
| Architecture overview | How the services fit together | Planned |
| Webhooks and event catalog | Five events, with payloads and retry behavior | Planned |
| Batch jobs | Nightly points expiry and partner CSV import | Planned |
| API reference | Generated from the spec with Redocly | Planned |
| How-to guides | Earn points, redeem a reward, handle a failed webhook | Planned |
| Changelog and migration guide | Moving from v1 to v2 | Planned |
| Case study | The problem, approach, challenges, and results | Planned |

## Tools

OpenAPI 3.1, Prism (mock server), Postman, Markdown, Docusaurus, Redocly, Vale, Git, and GitHub Actions.

## Definition of done

The project is finished when three things are true:

1. A new developer can make a first successful call in under 5 minutes.
2. Every example runs against the mock server exactly as written.
3. Style and spec checks pass in GitHub Actions on every change.
