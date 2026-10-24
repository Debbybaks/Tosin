# Verification record

The canonical source is `Debbybaks/Tosin`, branch `main`. Deborah Bakare (`Debbybaks`) is the sole repository contributor and owner; no co-author trailers or additional collaborators are added by the development workflow. Commits preserve the existing history. New commits use the account-specific GitHub no-reply address so GitHub can attribute them to the owner.

## Numerical regression suite

`npm test` runs 13 numerical tests covering finite default trajectories for all eight models, expected convergence orders for Euler/Heun/RK4, logistic and Lorenz Lyapunov estimates, a sampled divergence threshold, adaptive integration against a refined reference, logistic sweep bounds, seeded ensemble reproducibility, safe expression parsing, logistic fitting, held-out polynomial identification, bounded network coherence, invalid-input rejection, and optimization improvement.

## Browser verification

Chromium desktop at 1512 px and mobile at 390 px were exercised against the local HTTP server.

Verified paths:

- Page load → worker integration → phase portrait, time series and numerical insights.
- Chaos Challenge → paired integration → divergence metrics → paused comparison at the sampled horizon.
- Bifurcation sweep → canvas rendering of 180,000 sampled points.
- Save experiment → browser storage → experiment list → reopen configuration.
- System selection → logistic recurrence → mobile layout without horizontal overflow.
- Lyapunov convergence, solver benchmark, uncertainty analysis, local sensitivity, Poincaré and recurrence sections, inverse search, proportional feedback, noisy observations, Kuramoto networks, custom ODE parser, CSV fitting and candidate recurrence identification.
- Parameter estimation on a synthetic logistic series recovered r = 3.9 with a one-step residual at floating-point roundoff.

No browser JavaScript exceptions were observed during these flows. Numerical results are approximate and are not proofs of stability, chaos, physical validity, or global optimality.

## Release verification

Vercel must use the connected Git repository, never an independent local upload. Before confirming a production release, verify:

1. `git status --short` is empty.
2. Local `HEAD` equals GitHub `refs/heads/main`.
3. Vercel deployment Git metadata references the same repository, branch and SHA.
4. Deployment status is `READY` and target is `production`.
5. The served `/build-info.json` contains that SHA.

Build output and secrets are ignored by Git. Self-hosted fonts include their upstream OFL licenses.
