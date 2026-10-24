# TOSIN

**Toolkit for Oscillatory Systems, Instability & Nonlinearity**

A browser-native scientific laboratory with a teal and purple phase-space interface. All scientific computation happens locally; imported data is not uploaded. This is an experimental numerical software release, not a validated engineering or safety-critical tool.

## Canonical source and release policy

- Canonical repository: https://github.com/Debbybaks/Tosin
- Production branch: `main`
- Working checkout: `/workspace/tosin`
- Vercel must build from this repository. Do not publish independent local source uploads.
- The deployed `/build-info.json` records the source commit. Compare it with GitHub `main` and Vercel deployment metadata before declaring synchronization complete.
- Never force-push, rewrite history, or remove deployments to reconcile versions.

## Run and verify

Requires Node.js 22 or later. No runtime dependencies or API keys.

```sh
npm run dev  # http://localhost:3000
npm test
npm run build
```

`dist/` is generated and ignored. Vercel runs the numerical tests before building. Its static output directory is configured in `vercel.json`.

## Implemented instruments

- Eight modular models: Lorenz, Rössler, Duffing, Van der Pol, Lotka–Volterra predator–prey, equal-mass double pendulum, paired coupled oscillators, logistic map.
- Euler, Heun, RK4, and adaptive RK4 step doubling; time series and rotatable 3D or 2D projected phase portraits.
- Paired trajectory divergence, relative error, and first sampled predictability threshold crossing. Pause, scrub, and inspect states.
- Finite-time largest Lyapunov estimates with tangent-vector renormalization, convergence history, transient removal, and explicit limitations.
- Zoom by interval in logistic bifurcation sweeps; parameter inspection.
- Solver arena against a refined RK4 numerical reference; endpoint differences, timing, and function evaluations.
- Reproducible seeded initial-state Monte Carlo ensembles, quantiles, and local parameter sensitivity.
- Finite-resolution box-counting, coordinate-plane Poincaré sections, and recurrence plots.
- Experimental coordinate-descent target search, direct proportional feedback, measurement-noise diagnostics, and Kuramoto network synchronization.
- CSV logistic parameter fitting and polynomial recurrence identification with chronological validation.
- Safe arithmetic parser and bounded 2D custom ODE sandbox. No eval, dynamic functions, arbitrary code, or property access.
- Browser-local experiments and notes, JSON import/export, trajectory CSV export, and phase-portrait PNG export.

## Numerical assumptions and scope

`science.js` contains pure numerical routines and a model registry. `worker.js` dispatches expensive calculations off the UI thread. `app.js` handles controls and Canvas rendering. `style.css` provides the responsive visual system.

Continuous simulations use seconds; the logistic map uses iteration indices. Its duration control maps to 20 iterations per selected duration unit. State variables are not automatically nondimensionalized. Diagnostics using Euclidean distance depend on state units. Up to about 12,000 output points are retained; crossing detection uses those samples. Maximum integration workload is 200,000 fixed output steps.

Adaptive RK is classical RK4 with step doubling, not Dormand–Prince. The tolerance is fixed at 10⁻⁷ × (1 + ‖state‖). Lyapunov estimates independently use RK4 with step no larger than 0.01, a 10-second transient, and a 10⁻⁷ perturbation. The logistic estimate discards 300 iterations.

The Monte Carlo model perturbs initial conditions only, uses seed 41291, and reports empirical quantiles, not calibrated confidence bands. Randomness classification is heuristic. The network model explores phase synchronization rather than chaotic-node networks or cascading failures. Parameter estimation currently supports the logistic map; inferred equations are polynomial recurrences, not physical laws. Correlation dimension, arbitrary-dimensional custom equations, configurable solver tolerances, and full Lyapunov spectra are future extensions.

Scientific results need independent verification and step refinement. See the in-app method notes for each instrument. Storage is local to the browser and may be cleared; export JSON for durable reproducibility.
