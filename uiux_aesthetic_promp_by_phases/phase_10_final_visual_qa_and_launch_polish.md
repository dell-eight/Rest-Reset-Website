# Phase 10 — Final Visual QA And Launch Polish

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

Senior UI/UX Designer + QA Testing Agent + Frontend Developer Agent

## Required Agent Files To Read First

Read these first if they exist:

- `UX_UI_Designer_Agent.md`
- `QA_Testing_Agent.md`
- `Frontend_Developer_Agent.md`

## Goal

Do the final polish pass so the website feels cohesive, premium, and ready to show to customers.

## Copy-Paste Prompt For Codex

```text
You are implementing Phase 10 — Final Visual QA And Launch Polish.

Act like:
Senior UI/UX Designer + QA Testing Agent + Frontend Developer Agent

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
Do the final polish pass so the website feels cohesive, premium, and ready to show to customers.

Tasks:
1. Review all major pages for visual consistency.
2. Fix inconsistent spacing, button styles, card styles, typography, or layout issues.
3. Confirm homepage, products, product details, about, contact, FAQ, policy pages, and learn/blog pages look cohesive.
4. Confirm mobile and desktop experience are both polished.
5. Confirm no placeholder text looks accidental.
6. Confirm testimonial placeholders are not misleading.
7. Confirm policy/legal TODOs are clearly marked if still placeholders.
8. Run build/lint/typecheck if available.
9. Do not add new large features.
10. Create a final concise summary in the Codex response only.

End your response with:
- Agent files used
- Files changed
- What was improved
- Screens/sections affected
- Commands run
- Manual QA checklist
- PHASE 10 DONE or PHASE 10 NOT DONE
```

## Done Checklist

- Website looks cohesive.
- No obvious placeholder mistakes.
- Mobile and desktop are polished.
- No broken links/forms/checkout CTAs.
- Build passes if available.
- Ready for final human review.
