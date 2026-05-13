# Phase 5 — Navigation, Footer, And Trust UX Upgrade

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

Senior UX Designer + Frontend Developer Agent + Business Operations Agent

## Required Agent Files To Read First

Read these first if they exist:

- `UX_UI_Designer_Agent.md`
- `Frontend_Developer_Agent.md`
- `Business_Operations_Agent.md`

## Goal

Improve the header, navigation, footer, trust links, and ecommerce support experience.

## Copy-Paste Prompt For Codex

```text
You are implementing Phase 5 — Navigation, Footer, And Trust UX Upgrade.

Act like:
Senior UX Designer + Frontend Developer Agent + Business Operations Agent

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
Improve the header, navigation, footer, trust links, and ecommerce support experience.

Tasks:
1. Inspect header/navigation and footer components.
2. Improve desktop navigation clarity without adding unnecessary items.
3. Improve mobile navigation experience if present.
4. Make primary CTA visible but not aggressive.
5. Improve footer layout with organized links: Shop, Learn, Support, Policies.
6. Add or improve trust/support text: shipping, returns, contact, responsible wellness language.
7. Ensure policy links are easy to find.
8. Ensure navigation does not hide important conversion paths.
9. Keep all existing routes and links working.
10. Do not add complex mega menus.
11. Run build/lint/typecheck if available.

End your response with:
- Agent files used
- Files changed
- What was improved
- Screens/sections affected
- Commands run
- Manual QA checklist
- PHASE 5 DONE or PHASE 5 NOT DONE
```

## Done Checklist

- Navigation is clearer.
- Footer looks professional.
- Policy/support links are easy to find.
- Mobile nav works.
- Main CTA is visible.
- No route links are broken.
