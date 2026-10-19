---
title: "Project 2: AI Docs Pipeline"
sidebar_label: "Project 2: AI Docs Pipeline"
description: An AI documentation pipeline that generates, tests, and checks API docs from an OpenAPI spec, with a human review step.
---

# Project 2: AI Docs Pipeline

**Status:** Planned. Starts late November 2026, once Project 1 is complete.

## The idea

Most teams have more API endpoints than writers. AI can draft documentation quickly, but only if the output is consistent and accurate.

This project builds a pipeline that does both. It takes the LoyaltyLoop API spec from [Project 1](../loyaltyloop/index.md) and my hand-written pages as input, then generates new pages that match them.

## How the pipeline works

Each step feeds the next.

1. **Inputs:** the OpenAPI spec and short engineer notes
2. **Prompt templates:** versioned YAML files with instructions, style rules, and examples
3. **Generation:** a Python script sends each template to the Claude API
4. **Automated checks:** Vale, Redocly, and link checks run in GitHub Actions
5. **AI review:** a second step flags unclear or unsupported text
6. **Human review:** I check every page against the spec before it is published

## What I will show

The pipeline itself matters less than the proof that it works. These are the pieces I will publish.

| Piece | What it proves |
| --- | --- |
| Prompt case study (v1 to v3) | Prompts tested against a scoring rubric, not guessed |
| AI review sample | The errors AI made, and how I caught each one |
| Release notes generator | Notes drafted automatically from real Git commits |
| Before and after metrics | Time per page by hand compared with the pipeline |
| Case study | The full story, start to finish |

## Tools

Python, YAML, the Claude API, Vale, Redocly, markdownlint, Git, and GitHub Actions.
