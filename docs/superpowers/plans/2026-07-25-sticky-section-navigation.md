# Sticky Section Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a responsive sticky table of contents to the FlowVLA project page.

**Architecture:** Add stable section IDs and a Bulma navbar in `index.html`, keep presentation rules in `static/css/index.css`, and use the existing JavaScript entry point only to toggle and close the mobile menu.

**Tech Stack:** HTML5, Bulma CSS, vanilla JavaScript

## Global Constraints

- Reuse the existing Bulma visual language and dependencies.
- Keep all existing research content and figures unchanged.
- Support desktop horizontal navigation and a collapsed mobile menu.
- Apply smooth scrolling and fixed-header anchor offset.

---

### Task 1: Responsive Sticky Section Navigation

**Files:**
- Modify: `index.html`
- Modify: `static/css/index.css`
- Modify: `static/js/index.js`

**Interfaces:**
- Consumes: Existing page sections and Bulma navbar classes.
- Produces: Section anchors `abstract`, `approach`, `rollouts`, `counterfactual-intervention`, `benchmarks`, `efficiency`, `ablations`, and `BibTeX`; mobile toggle element `#section-nav-burger`; menu element `#section-nav-menu`.

- [x] **Step 1: Verify the navigation contract currently fails**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
html = Path("index.html").read_text()
for anchor in ("abstract", "approach", "rollouts", "counterfactual-intervention",
               "benchmarks", "efficiency", "ablations", "BibTeX"):
    assert html.count(f'id="{anchor}"') == 1
assert 'id="section-nav-burger"' in html
assert 'id="section-nav-menu"' in html
PY
```

Expected: failure because the navbar and most section IDs do not exist.

- [x] **Step 2: Implement the navigation markup**

Insert a sticky Bulma navbar after the title hero. Link each navbar item to one of the eight anchors above. Add the missing IDs to existing section elements without changing their content.

- [x] **Step 3: Implement responsive styling**

Add smooth scrolling, `scroll-margin-top`, sticky positioning, a subtle border and shadow, compact desktop spacing, and mobile menu alignment to `static/css/index.css`.

- [x] **Step 4: Implement mobile behavior**

In `static/js/index.js`, toggle Bulma's `is-active` class and `aria-expanded` when the burger is clicked. Close the menu when a navigation link is selected.

- [x] **Step 5: Verify markup and runtime assets**

Run the Step 1 contract again and request `/`, `/static/css/index.css`, and `/static/js/index.js` from the local preview server. Expected: all assertions pass and all requests return HTTP 200.

- [ ] **Step 6: Commit and publish**

```bash
git add index.html static/css/index.css static/js/index.js docs/superpowers/plans/2026-07-25-sticky-section-navigation.md
git commit -m "feat: add sticky section navigation"
git push origin HEAD:master
```
