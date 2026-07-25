# Sticky Section Navigation Design

## Goal

Add a compact table of contents to the FlowVLA project page so readers can jump to the main sections and retain access to navigation while scrolling.

## Design

- Add a Bulma-style sticky navigation bar below the page title block.
- Include links to Abstract, Approach, Rollouts, Counterfactual, Benchmarks, Efficiency, Ablations, and BibTeX.
- Display the links horizontally on desktop.
- Collapse the links behind a menu button on mobile.
- Reuse the existing typography, neutral colors, and Bulma classes.
- Add stable IDs to the corresponding sections.
- Enable smooth scrolling and apply anchor offset so headings remain visible below the fixed bar.
- Keep JavaScript limited to toggling the mobile menu.

## Validation

- Every navigation link resolves to exactly one section.
- The bar remains visible while scrolling.
- The mobile menu opens, closes, and does not cause horizontal overflow.
- Existing content and counterfactual figures remain unchanged.
