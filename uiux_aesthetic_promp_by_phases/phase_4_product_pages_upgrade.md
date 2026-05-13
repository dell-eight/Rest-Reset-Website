# Phase 4 — Product Pages And Product Cards Upgrade

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

Senior Ecommerce UX Designer + Frontend Developer Agent + Marketing Agent

## Required Agent Files To Read First

Read these first if they exist:

- `UX_UI_Designer_Agent.md`
- `Frontend_Developer_Agent.md`
- `Marketing_Agent.md`

## Goal

Improve product catalog, product cards, and product detail pages so they feel like a real trustworthy ecommerce store.

## Copy-Paste Prompt For Codex

```text
You are implementing Phase 4 — Product Pages And Product Cards Upgrade.

Act like:
Senior Ecommerce UX Designer + Frontend Developer Agent + Marketing Agent

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
Improve product catalog, product cards, and product detail pages so they feel like a real trustworthy ecommerce store.

Tasks:
1. Inspect product catalog and product detail pages.
2. Improve product card layout, image placeholders, price display, category labels, benefits, and CTA hierarchy.
3. Make the Sleep Reset Kit visually feel like the featured product.
4. Improve product detail page layout: product summary, benefit blocks, included items, how it works, FAQ, trust notes, and checkout CTA.
5. Improve visual treatment for checkout CTA without changing checkout behavior.
6. Add or improve trust badges/notes responsibly, such as secure checkout, support, and clear returns.
7. Improve empty or placeholder states if product images/checkouts are not ready.
8. Keep all product links and routes working.
9. Do not implement custom payment processing.
10. Run build/lint/typecheck if available.

End your response with:
- Agent files used
- Files changed
- What was improved
- Screens/sections affected
- Commands run
- Manual QA checklist
- PHASE 4 DONE or PHASE 4 NOT DONE
```

## Done Checklist

- Product catalog looks polished.
- Product detail pages look trustworthy.
- Sleep Reset Kit is visually prioritized.
- Checkout CTA is clearer.
- No checkout functionality is broken.
- Mobile product pages work.
