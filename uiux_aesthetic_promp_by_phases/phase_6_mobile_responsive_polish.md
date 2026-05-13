# Phase 6 — Mobile Responsive Polish

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

Mobile UX Designer + Frontend Developer Agent + QA Testing Agent

## Required Agent Files To Read First

Read these first if they exist:

- `UX_UI_Designer_Agent.md`
- `Frontend_Developer_Agent.md`
- `QA_Testing_Agent.md`

## Goal

Polish the website for mobile users, especially homepage, products, forms, navigation, and CTA sections.

## Copy-Paste Prompt For Codex

```text
You are implementing Phase 6 — Mobile Responsive Polish.

Act like:
Mobile UX Designer + Frontend Developer Agent + QA Testing Agent

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
Polish the website for mobile users, especially homepage, products, forms, navigation, and CTA sections.

Tasks:
1. Inspect layouts at mobile, tablet, and desktop breakpoints.
2. Fix cramped spacing, oversized text, poor stacking, and buttons that are too small.
3. Improve mobile hero layout.
4. Improve product cards and product detail page on mobile.
5. Improve form layout and input sizes on mobile.
6. Improve FAQ and content readability on mobile.
7. Consider adding a sticky mobile CTA only if it does not block content or hurt UX.
8. Do not remove desktop polish.
9. Do not change backend behavior.
10. Run build/lint/typecheck if available.

End your response with:
- Agent files used
- Files changed
- What was improved
- Screens/sections affected
- Commands run
- Manual QA checklist
- PHASE 6 DONE or PHASE 6 NOT DONE
```

## Done Checklist

- Mobile layout feels polished.
- Buttons are easy to tap.
- Forms are usable.
- Product pages work on mobile.
- No desktop regression.
- Build passes if available.
