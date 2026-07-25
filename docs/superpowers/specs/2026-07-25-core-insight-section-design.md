# Core Insight Section Design

## Goal

State the paper's high-level view of embodied world models before presenting the FlowVLA teaser and technical details.

## Placement and Content

- Place the section after the sticky navigation and before the teaser.
- Title it `Core Insights for Embodied World Models`.
- Present two complementary insights:
  1. A structural requirement: embodied world models should explicitly reason about scene dynamics between perception and future prediction.
  2. A capability requirement: causal world models should respond appropriately to alternative dynamics or interventions.
- Connect the first insight to FlowVLA's unified autoregressive chain `v_t → f_t → v_{t+1}`.
- Connect the second insight to the counterfactual flow intervention while describing the result as responsiveness to counterfactual dynamics rather than unrestricted autonomous counterfactual reasoning.
- Add `Insight` as the first section link in the sticky navigation.

## Presentation

Use an editorial two-row layout without card borders or shadows. Each row pairs a numbered insight heading with a short claim and sequence. Place the shared FlowVLA implementation in one highlighted summary band below the rows. Stack each row on mobile without adding dependencies.
