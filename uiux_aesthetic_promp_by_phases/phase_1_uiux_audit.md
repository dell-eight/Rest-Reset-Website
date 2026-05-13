# Phase 1 — UI/UX Audit And Visual Direction

# Project Context

The website already exists and is functional.

Website:
Science-backed sleep and recovery ecommerce/dropshipping website for tired office workers, gamers, night-shift workers, remote workers, programmers, and young professionals.

Main offer:
Sleep Reset Kit — a sleep and recovery product bundle.

Brand positioning:
Science-backed recovery tools for tired modern workers.

Goal of this phase pack:
Improve the website's aesthetic quality, visual hierarchy, layout polish, conversion experience, and trustworthiness without rebuilding the website from scratch.

Important:
This is not a full rebuild.
This is not a functionality phase.
This is a UI/UX aesthetic improvement phase.


# Strict Codex Rules For Every UI/UX Phase

1. Do not rebuild the entire website.
2. Do not change the business model.
3. Do not remove existing working functionality.
4. Do not break forms, checkout links, analytics, routing, or API calls.
5. Do not create only documentation.
6. Modify actual UI files, components, styles, layout, and copy where needed.
7. Read existing files first before editing.
8. Make small, careful, reviewable changes.
9. Keep the brand calm, premium, clean, trustworthy, and science-backed.
10. Avoid fake medical claims and exaggerated wellness promises.
11. Improve mobile and desktop experience.
12. Keep accessibility in mind.
13. Do not add unnecessary dependencies.
14. Do not add animations that hurt performance or readability.
15. Run build/lint/typecheck if available.
16. End every phase with:
   - Files changed
   - What was improved
   - Screens/sections affected
   - Commands run
   - Manual QA checklist
   - PHASE X DONE or PHASE X NOT DONE


# Agent Instructions

Before implementing each phase, look for these agent files if they exist:

- `docs/ai-agents/UX_UI_Designer_Agent.md`
- `docs/ai-agents/Frontend_Developer_Agent.md`
- `docs/ai-agents/Marketing_Agent.md`
- `docs/ai-agents/QA_Testing_Agent.md`
- `docs/ai-agents/Debugging_Agent.md`

If they exist, read the required agent files listed in the phase.
If they do not exist, continue using the role described in the phase.


## Assigned Role

Act like:

Senior UI/UX Designer + Product Manager + QA Testing Agent

## Required Agent Files To Read First

Read these first if they exist:

- `UX_UI_Designer_Agent.md`
- `Product_Manager_Agent.md`
- `QA_Testing_Agent.md`

## Goal

Audit the existing website and identify the highest-impact aesthetic and UX improvements before making major design changes.

## Copy-Paste Prompt For Codex

```text
You are implementing Phase 1 — UI/UX Audit And Visual Direction.

Act like:
Senior UI/UX Designer + Product Manager + QA Testing Agent

Required behavior:
1. Read the required agent files for this phase first.
2. Inspect the existing website code before editing.
3. Do not rebuild the website.
4. Do not remove or break existing functionality.
5. Do not create only documentation unless this phase specifically asks for an audit note.
6. Modify actual UI/layout/style/component files when implementation is required.
7. Keep changes focused only on this phase.
8. Use a premium, calm, trustworthy ecommerce aesthetic.
9. Keep wellness copy responsible and non-medical.
10. Run build/lint/typecheck if available.

Goal:
Audit the existing website and identify the highest-impact aesthetic and UX improvements before making major design changes.

Tasks:
1. Inspect the current website pages, components, layout, styling, and design patterns.
2. Identify visual inconsistencies in spacing, typography, colors, cards, buttons, sections, and page hierarchy.
3. Identify UX issues that affect conversion, trust, readability, or mobile experience.
4. Identify risky areas where changes could break existing functionality.
5. Create a short UI/UX improvement plan inside the Codex response only. Do not create a new documentation file unless the project already has a suitable notes file.
6. Make only tiny safe fixes if obvious, such as inconsistent button text or broken spacing classes. Save bigger changes for later phases.
7. Do not rebuild any page in this phase.
8. Run build/lint/typecheck if available.

End your response with:
- Agent files used
- Files changed
- What was improved
- Screens/sections affected
- Commands run
- Manual QA checklist
- PHASE 1 DONE or PHASE 1 NOT DONE
```

## Done Checklist

- Current design problems are identified.
- High-impact improvements are prioritized.
- No major rebuild was done.
- Existing functionality remains intact.
- Next phase is clearly recommended.
