# Core Insight Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a high-level Core Insight section before the teaser and link it from the sticky navigation.

**Architecture:** Add semantic HTML to `index.html` and isolated responsive presentation rules to `static/css/index.css`. No new JavaScript or dependencies are required.

**Tech Stack:** HTML5, Bulma CSS, custom CSS

## Global Constraints

- Preserve all existing research text and figures.
- Place the new section after navigation and before the teaser.
- Use the approved perception–reasoning–prediction framing.
- Support horizontal desktop and vertical mobile layouts.

---

### Task 1: Core Insight Section

**Files:**
- Modify: `index.html`
- Modify: `static/css/index.css`

**Interfaces:**
- Produces: Section anchor `#insight`, navigation link `href="#insight"`, and visual process element `.insight-flow`.

- [x] **Step 1: Run the structural contract and observe failure**

Check that `#insight`, its navigation link, approved heading, and three process stages occur exactly once. Expected: failure because the section is absent.

- [x] **Step 2: Add the section and navigation link**

Insert the approved copy and semantic three-stage process after the sticky navbar and before the teaser.

- [x] **Step 3: Add responsive styling**

Add a restrained highlighted panel, horizontal desktop process, vertical mobile process, and existing anchor offset behavior.

- [x] **Step 4: Verify**

Re-run the structural contract, check CSS syntax with `git diff --check`, and request the HTML and stylesheet from the local preview server. Expected: all checks pass.

- [ ] **Step 5: Commit and publish**

Commit the HTML, CSS, design spec, and implementation plan, then merge into `master` and push.
