# Phase I — Reusable Materials from the Oct 6 Archive Repo

**Audit date:** 2026-10-17 · **Scope:** read-only recon of `mrjosueayalaperez-dev/Mnqscalpstacks-university-` (created Oct 6, 2026)
**Rule:** the old repo stays untouched and preserved per Zelator's order. Everything in the new build is written fresh — no prose copied from the old files.

---

## 1. Overview of the old repo's contents

| File | Size | What it is |
|---|---|---|
| `index-5.html` | ~247 KB | Single self-contained page ("MQ University — Earth, Cosmos & Academy"). Three views: an orrery of the solar system ("The Living Cosmos"), a museum globe of historic places ("The Living Earth"), and the "Academy" — a ~30-lesson MNQ trading classroom with simulations, journaling, and risk disclosure. All markup, CSS, and JS inline; no build step; no network dependencies except external source links in the globe view. |
| `bridge.js` | ~2.6 KB | Standalone Node/Postgres helper from a different project (signals backend): an append-only ledger for trade-execution records with idempotency-key guarded inserts and status transitions (pending → filled/rejected). Not related to the Academy page. |
| `mnq-scalpstack (1).zip` | ~731 KB, 221 files | A full Node.js/Express signals-SaaS backend (the old paid product), not university content: `server.js`, routes, EJS views (landing, pricing, checkout, dashboard, simulator, blog), `db/` modules (users, subscriptions, proof-ledger, signals, bridge executions, media-uploads), `services/` (signal engine, position-sizing, backtest, journal, footprint, NinjaTrader bridge, email, discord), Stripe webhook scripts, SQL migrations, CSS. It is the prior commercial codebase, archived whole. |

## 2. Academy structure found in `index-5.html` (summarized, not quoted)

**Curriculum: 30 lessons across 5 levels.**
- Level 1 — Foundation (lessons 1–5): futures contract basics, tick/point value and leverage, trading sessions and participants, expiration/settlement/rollover, risk of loss and simulation requirements.
- Level 2 — Intermediate (lessons 6–12): session/market context, support & resistance with location concepts, EMA9/EMA21 structure, VWAP session control, RSI14 plus a multi-candle confirmation rule, one-minute entry with five-minute permission, valid setups vs. HOLD vs. exits.
- Level 3 — Intermediate (lessons 13–18): stop placement and invalidation, MNQ position sizing, daily loss limit with a named dollar cap ("Safety Sentinel"), decision types (BUY/SELL/HOLD/FLATTEN ALL), bracket orders and simulated execution, journaling and review.
- Level 4 — Intermediate (lessons 19–24): probability vs. prediction, expectancy and reward-to-risk, sample size and losing streaks, process quality vs. individual outcomes, an account-path simulation, a final reviewed practice week.
- Level 5 — Advanced (lessons 25–30): NQ vs. MNQ sizing, futures options basics, premium/expiration/liquidity/decay, volume profile and auction behavior, TradingView and NinjaTrader workflow, final Academy assessment.

**Per-lesson anatomy:** title, difficulty tag, estimated minutes, 3 objectives, a "watch and listen" narrated segment (browser text-to-speech read-aloud with stop button), a "practice the decision" free-response check with automatic grading and explanation, one stated rule, a risk reminder, and a 5-question knowledge check. Completing the check marks the lesson done.

**Components in the Academy:**
- **Simulate tab** — six scenario-based chart simulations. Learner reads location/permission/trigger/risk facts and chooses BUY, SELL, HOLD, or FLATTEN ALL; immediate correct/review feedback. Scenarios include an aligned long, an aligned short, disagreeing timeframes, trading outside the allowed window, an invalidation being hit, and the daily loss cap being reached.
- **Trade Path tab** — a Monte Carlo-style account simulator: inputs for starting balance, risk per trade, win rate, reward/risk, and trade count; labeled as a hypothetical random sequence, not a forecast. Risk per trade updates with balance.
- **Journal tab** — a practice journal form (decision, setup, observations) stored device-local; plus a "Grade the process" review prompt covering location, 5-minute permission, 1-minute confirmation, risk, and what would invalidate the idea.
- **Assessment tab** — final assessment (80% required to pass) drawn from every third lesson's check.
- **Elite review tab** — a 7-gate graduation checklist: 30 lessons complete, six simulations, Trade Path done, six journal entries, all five level quizzes ≥80%, final assessment ≥80%, risk disclosure accepted. Explicitly framed as educational completion, not a credential and not a promise of trading results.
- **Disclosure tab** — a futures risk disclosure (leverage, losses beyond margin, stop slippage, fees) with an acknowledgment checkbox saved in progress state.
- **Progress system** — localStorage state (lessons done, sims done, quiz scores, disclosure accepted), plus a one-click JSON export ("Export progress") for backup.
- **Four feature cards** on the Academy landing (EMA21 spine pullback, VWAP retest, two-timeframe read, risk-before-entry) each with a one-paragraph description and one launchable pullback drill.

**Notable UI/UX patterns:** single-file, zero-dependency page (works offline); dark theme with gold accents; tab-based classroom navigation (Curriculum / Simulate / Trade Path / Journal / Assessment / Elite review / Disclosure); a decision standard phrased around location, higher-timeframe permission, and a multi-candle trigger — or HOLD; the motto-adjacent rule "Simulation comes before size." The Cosmos and Earth views are the earlier three.js side apps (orrery, museum globe), embedded as the first two "rooms" of the page.

## 3. REUSABLE — worth carrying into the new Phase I build

These are **ideas, topics, and structural patterns** to re-express in fresh writing — not code or prose to copy:

1. **The 5-level, 30-lesson topic progression** — Foundation → Intermediate (context/indicators → execution/risk → statistics) → Advanced. The sequencing logic is sound and maps well to Zelator's Phase I–VIII plan; several topics (tick value, VWAP, EMA structure, three-candle confirmation, Safety Sentinel daily cap) are already the house vocabulary.
2. **The uniform per-lesson anatomy** — objective + explanation + example + exercise + knowledge check. This matches Zelator's module spec exactly; adopt it as the template for all Phase I modules.
3. **Gate-gated graduation** — the 7-gate checklist (lessons, sims, path sim, journal entries, quizzes, disclosure) is a good structural pattern for "finish a phase" gates in the new curriculum.
4. **Scenario-based decision sims with a four-way decision set** (BUY/SELL/HOLD/FLATTEN ALL) — the pedagogical idea of classifying facts before deciding transfers directly to new, original scenarios.
5. **Device-local journal + JSON export** — privacy-preserving progress storage that works without accounts; the export-backup idea is worth keeping.
6. **Mandatory risk disclosure with acknowledgment** — a checkbox acknowledgment before any assessment, aligned with the no-profit-promises mission.
7. **Read-aloud accessibility** — the browser text-to-speech narration is a cheap, zero-dependency accessibility win worth retaining.
8. **"Simulation before size" framing** — the principle (not the wording) belongs in Phase I's risk-management module.

## 4. ARCHIVED — stays untouched in the old repo, and why

Per Zelator's order to preserve the Oct 6 repo (do not delete, overwrite, or "fix" it):

- **`mnq-scalpstack (1).zip`** — the old paid-product backend. Archive whole. The new University is a free, strictly separated education project (no live execution, no broker credentials, no automated orders in curriculum). Do not transplant its signal engine, Stripe/subscription code, proof-ledger, or NinjaTrader bridge — those belong to the commercial era the University deliberately moved away from.
- **`bridge.js`** — execution-ledger code for a trading backend. Has no place in an education curriculum; archive as-is.
- **`index-5.html`** — the reference snapshot of the original 30-lesson page. Keep it readable-only for future recon. The Cosmos/Earth views are superseded by the newer standalone side-app builds; the Academy prose must not be copied into the new build (original writing required).
- **Old views/blog posts in the zip** (e.g., old strategy articles) — historical artifacts only; the new curriculum writes its own.

## 5. Concrete recommendations for the new build

1. **Adopt the 5-level skeleton, write all new prose.** Keep the Foundation → Intermediate → Advanced spine and the per-lesson template (objective/explanation/example/exercise/check); rewrite every sentence from scratch so the Phase I build is original.
2. **Rebuild the four decision sims as original scenarios.** The aligned-long / aligned-short / timeframe-disagreement / outside-window / invalidation-hit / loss-cap-reached scenario *types* are the right drill set; write new scenario text around Zelator's refined Gate 5 rule (ES/MNQ divergence = warning requiring extra confirmation, not auto-reject).
3. **Keep the 7-gate graduation pattern, tied to Phase I exit.** Lessons + sims + journal + disclosure + quiz threshold as the merge-gate before main, with the explicit "not a credential" framing.
4. **Ship device-local progress + JSON export + disclosure acknowledgment from day one.** Zero-account, zero-backend, privacy-first — matches the give-back mission and removes vendor lock-in.
5. **Do not import anything executable from the zip.** The old signal engine, bridge, and billing code contradict the University separation rule (education only, no live execution, no paid ladder). Leave the archive sealed; the curriculum links to trading tools only as workflow references (e.g., TradingView/NinjaTrader), never as code.
