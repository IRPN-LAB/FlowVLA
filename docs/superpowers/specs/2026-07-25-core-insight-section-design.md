# Core Insight Section Design

## Goal

State the paper's high-level view of embodied world models before presenting the FlowVLA teaser and technical details.

## Placement and Content

- Place the section after the sticky navigation and before the teaser.
- Title it `Core Insight: An Autoregressive Causal Chain from Perception to Prediction`.
- State that embodied world models should move beyond direct observation-to-future mappings and instead establish an explicit causal reasoning chain from perception to future prediction.
- Visualize the process as `Perception → Causal Reasoning → Prediction`.
- Explain that FlowVLA instantiates this principle within a unified autoregressive model by generating motion as an explicit intermediate representation before the future frame.
- Display the autoregressive chain `v_t → f_t → v_{t+1}`.
- Add `Insight` as the first section link in the sticky navigation.

## Presentation

Use the existing Bulma typography and a restrained highlighted panel. Show the process horizontally on desktop and vertically on mobile without adding dependencies.
