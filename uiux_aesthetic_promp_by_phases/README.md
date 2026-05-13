# Sleep Recovery Website — UI/UX Aesthetic Upgrade Phases

Use this folder after the website is already built and functional.

The goal is to make the website look more polished, premium, trustworthy, and conversion-focused.

This phase pack is designed for Codex or Cursor.

---

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


---

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


---

# Agent Instructions

Before implementing each phase, look for these agent files if they exist:

- `docs/ai-agents/UX_UI_Designer_Agent.md`
- `docs/ai-agents/Frontend_Developer_Agent.md`
- `docs/ai-agents/Marketing_Agent.md`
- `docs/ai-agents/QA_Testing_Agent.md`
- `docs/ai-agents/Debugging_Agent.md`

If they exist, read the required agent files listed in the phase.
If they do not exist, continue using the role described in the phase.


---

## Recommended Folder Setup

Place these files here:

```text
your-project/
  docs/
    uiux-phases/
      phase_1_uiux_audit.md
      phase_2_design_system_polish.md
      phase_3_homepage_visual_upgrade.md
      ...
```

Keep your AI agent files here:

```text
your-project/
  docs/
    ai-agents/
      UX_UI_Designer_Agent.md
      Frontend_Developer_Agent.md
      Marketing_Agent.md
      QA_Testing_Agent.md
      Debugging_Agent.md
```

---

## Execution Order

1. `phase_1_uiux_audit.md`
2. `phase_2_design_system_polish.md`
3. `phase_3_homepage_visual_upgrade.md`
4. `phase_4_product_pages_upgrade.md`
5. `phase_5_navigation_footer_trust_upgrade.md`
6. `phase_6_mobile_responsive_polish.md`
7. `phase_7_microinteractions_and_motion.md`
8. `phase_8_copy_visual_hierarchy_cta_polish.md`
9. `phase_9_accessibility_performance_qa.md`
10. `phase_10_final_visual_qa_and_launch_polish.md`

---

## Best First Prompt For Codex

```text
I added a UI/UX aesthetic upgrade phase pack in docs/uiux-phases.

Start with docs/uiux-phases/phase_1_uiux_audit.md.

Important:
1. Read the required agent files listed in the phase.
2. Act like a senior UI/UX Designer and frontend implementer.
3. Do not rebuild the website.
4. Do not remove existing functionality.
5. Do not create only documentation unless the phase asks for an audit report.
6. Inspect the current website code first.
7. Make only the changes required by the phase.
8. Run build/lint/typecheck if available.
9. End with PHASE 1 DONE or PHASE 1 NOT DONE.
```

---

## If Codex Starts Rebuilding Too Much

Use this correction:

```text
Stop. Do not rebuild the website.
This is a UI/UX aesthetic improvement task only.
Keep existing functionality and structure.
Make small, careful visual improvements for the current phase only.
```
