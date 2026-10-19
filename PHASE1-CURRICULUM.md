# M&Q University — Phase I: Market Foundations
## Curriculum Specification (Authoritative Spec)
**Branch:** `phase-1-dev` · **Mission:** KNOWLEDGE IS THE LEGACY — free futures trading education; we do not promise profits, ever. Education Before Execution · Discipline Before Profit · Risk Before Reward · Practice Before Performance · Knowledge Before Ego.

> Audience: a true beginner who has never traded a futures contract. Every module must stand alone, read well on a phone, and work fully offline (embedded CSS, Google Fonts with system fallbacks, no external JS).

---

## Module 1 — Futures Fundamentals: ES & MNQ

**Learning objective:** By the end of this module, the student can explain in their own words what a futures contract is, name the four index contracts we study (ES, MES, NQ, MNQ) with their dollar-per-point values and tick sizes, describe quarterly expiration codes, and state why a trader would practice on a micro contract instead of a full-size one.

**Explanation outline:**
- What a futures contract is: a standardized agreement to buy/sell an index at a set price on a future date — a promise, not a stock.
- The four contracts we study: ES = E-mini S&P 500 ($50/point); MES = Micro E-mini S&P 500 ($5/point); NQ = E-mini Nasdaq-100 ($20/point); MNQ = Micro E-mini Nasdaq-100 ($2/point).
- Tick size for all four: 0.25 points (so one ES tick = $12.50, one MNQ tick = $0.50).
- Micro vs. mini: same market, one-tenth the size — built for learning and practice.
- Expiration: quarterly cycle H (March), M (June), U (September), Z (December); why traders roll to the "front month" (highest volume).
- Leverage concept: futures move fast relative to account size — that is exactly why Module 6 exists before anything real.
- Margin: requirements change constantly — always check current requirements with your data/platform provider; never memorize a fixed number.

**Worked-example sketch (illustrative numbers):**
- MNQ moves 10 points in the student's favor → 10 × $2 = **$20 per contract** (labeled illustrative).
- Same 10-point move on NQ → 10 × $20 = **$200 per contract** — ten times the size, ten times the speed of loss.
- Pair rule: ten-to-one comparisons only inside a pair — ES↔MES track the S&P 500, NQ↔MNQ track the Nasdaq-100. Never compare across pairs.
- Lesson: point value is the "volume knob" of risk; micros let you learn the same market at one-tenth the speed.

**Practice exercise:**
1. Write the four contracts, point values, and tick values from memory on paper.
2. On a free charting site, open MNQ (front month) and read the contract symbol — identify the expiration letter.
3. Compute, by hand, the dollar value of a 5-point move and a 20-point move on both MNQ and MES.
4. Write one paragraph: "Why I will start with micros if I ever trade."

**Knowledge-check plan (5 questions):** point values of ES/MES/NQ/MNQ; tick value math; what expiration codes H/M/U/Z mean; why micros are suited to learning; why margin requirements must be checked live rather than memorized.

---

## Module 2 — Candlestick Structure & Price Action

**Learning objective:** The student can read a candlestick chart: open, high, low, close; body vs. wick; what green/red mean; how timeframe choice changes the picture; and can name the basic story candles tell (momentum, indecision, rejection) without memorizing pattern names.

**Explanation outline:**
- Candles as footprints: every candle is one battle between buyers and sellers over one time period.
- Anatomy: body (open→close), upper/lower wicks (the full journey), color (up vs. down).
- Reading the story: big body = conviction; long wick on one side = rejection; small body = indecision.
- Timeframes: 1-min vs. 15-min vs. daily — same market, different zoom; beginners watch one chart until it feels familiar.
- Context over shapes: a candle means nothing alone — always ask "where are we?" (near support? after a run? mid-range?).
- Honest limits: candlesticks describe the past; they do not predict the future. No pattern "works" alone.

**Worked-example sketch (illustrative):**
- A 5-minute MNQ candle: open 18,400.00, high 18,412.50, low 18,398.25, close 18,409.00.
- Read: buyers pushed price up most of the period, closed near the high with a small upper wick → buyers won this round.
- Then the next candle reverses it → lesson: one candle is a paragraph, not the whole book.

**Practice exercise:**
1. Open any MNQ chart; label 10 candles: body, upper wick, lower wick, direction.
2. Find one long-wick candle and one tiny-body candle; write what each "story" might be, in one sentence each.
3. Switch the same session between 1-min and 15-min; note how the "noise" changes.
4. Pick one 15-minute candle and compute its range in points and in MNQ dollars (illustrative).

**Knowledge-check plan (5 questions):** body vs. wick definitions; what a long upper wick suggests; why timeframe changes interpretation; why a candle's location matters more than its shape; the honest limit of candle reading.

---

## Module 3 — EMA 9, EMA 21 & EMA 200

**Learning objective:** The student can explain what an exponential moving average is, what the 9, 21, and 200 lengths represent (fast, medium, slow), read basic relationships between price and the EMAs (above/below, stacking, crossovers), and treat them as context — not signals.

**Explanation outline:**
- Moving averages: the average price over the last N periods, smoothed so the eye can see the current.
- Exponential vs. simple: EMA reacts faster to recent price (recency weighting, concept-level, no formula needed).
- The three lengths: 9 (fast — the present moment), 21 (medium — the recent trend), 200 (slow — the big picture / institutional line).
- Reading the stack: price above all three + 9 > 21 > 200 = an uptrend's "story"; the reverse = a downtrend's story.
- Crossovers as *confirmation of a change that already happened*, not predictions.
- The trap: in choppy sideways markets EMAs tangle and price whipsaws across them — the very place beginners lose money chasing.

**Worked-example sketch (illustrative):**
- MNQ daily context: price 18,500, EMA 9 = 18,470, EMA 21 = 18,430, EMA 200 = 18,200 → stacked bullish, price above all three.
- Zoom to 5-min: EMA 9 crosses below EMA 21 during lunch chop → price oscillates ±8 points around flat EMAs.
- Lesson: the daily stack says "uptrend context"; the 5-min cross says "choppy right now" — context, not a trade signal.

**Practice exercise:**
1. Add EMA 9/21/200 to an MNQ daily chart; write which are stacked and what story that tells.
2. On a 5-min chart, find one clean trend day and one choppy day; describe the EMA behavior in each.
3. Find one EMA crossover; write what happened *before* the cross that already told the story.
4. Journal: "When are EMAs most likely to mislead me?"

**Knowledge-check plan (4 questions):** what EMA means and why it's "exponential"; what each length represents; what a stacked EMA picture says (and does not say); why chop tangles EMAs.

---

## Module 4 — VWAP & RSI 14

**Learning objective:** The student can explain VWAP (volume-weighted average price, reset each session) and RSI 14 (Wilder's 0–100 momentum oscillator), read their basic states (price vs. VWAP; RSI high/low/mid), and state clearly that 70/30 are traditional reference guides — not buy/sell signals.

**Explanation outline:**
- VWAP: the average price of the day weighted by volume — "where the day's business actually got done."
- VWAP resets every session; used mainly on intraday charts; price above VWAP = buyers had the better day so far.
- Standard-deviation bands (±1, ±2) exist as *distance markers*, not targets.
- RSI 14: Wilder's oscillator, 0–100, measuring the speed and size of recent gains vs. losses over 14 periods.
- 70/30 are traditional reference zones (often called overbought/oversold guides) — they describe momentum *state*, they do not command action. In strong trends RSI can stay elevated for a long time.
- Divergence concept (price makes a new high, RSI doesn't) as a *caution flag worth studying* — a warning light, not a trade trigger.
- Both are lenses, not engines: they refine what you see; they don't decide for you.

**Worked-example sketch (illustrative):**
- Intraday MNQ: price holds above VWAP all morning; at 11:00 it drops through VWAP and RSI 14 reads 28.
- Read: the day's balance flipped to sellers; momentum is stretched low — *information*, not an instruction.
- Price later retests VWAP from below and fails → the mission's "wait for the retest" language introduced gently.

**Practice exercise:**
1. On an intraday MNQ chart, mark where price crossed VWAP and what happened next, 5 times.
2. Watch RSI 14 for one session; note every time it crosses 70 or 30 and what price did afterward.
3. Find one RSI divergence; write what it warned about vs. what actually happened.
4. Write the sentence: "RSI 70 is a _____, not a _____." (own words)

**Knowledge-check plan (5 questions):** what VWAP measures and when it resets; what RSI 14 measures (0–100, Wilder's); what 70/30 mean and don't mean; what a VWAP cross describes; what divergence is and its honest limit.

---

## Module 5 — Market Structure, Support & Resistance

**Learning objective:** The student can identify higher highs/higher lows (uptrend), lower highs/lower lows (downtrend), and ranges; mark simple support and resistance zones from prior swing points; and describe a "break and retest" using the mission's language.

**Explanation outline:**
- Structure = the market's handwriting: uptrend (HH/HL), downtrend (LH/LL), range (sideways between two borders).
- Support & resistance as *zones*, not lines — old battlegrounds where price reacted before.
- Why old levels matter: memory (stops, entries, and psychology cluster there) — described as tendency, never guaranteed.
- The retest: after a level breaks, price often returns to it before continuing — "We don't chase burning candles. We wait for the retest."
- Multiple touches strengthen a zone's *story*; a clean break with conviction weakens it.
- Marking practice: start with swing highs/lows on a daily chart; fewer, cleaner zones beat a cluttered chart.

**Worked-example sketch (illustrative):**
- MNQ rallies to 18,600, pulls back to 18,520, rallies to 18,650, pulls back to 18,560 → HH/HL/HH/HL = uptrend structure.
- Old resistance 18,600 breaks; price pulls back to 18,600 and holds → a retest, told in the mission's language.
- Numbers illustrative; the *process* (mark → wait → observe) is the lesson.

**Practice exercise:**
1. On an MNQ daily chart, mark the last 3 swing highs and 3 swing lows; label the structure.
2. Draw 2–3 support/resistance zones from prior reactions; note how many times each was touched.
3. Find one break-and-retest; screenshot and describe it in two sentences.
4. Delete half your lines; write why fewer zones serve you better.

**Knowledge-check plan (5 questions):** definitions of HH/HL and LH/LL; zone vs. line; why old levels tend to matter; what a retest is; why clutter hurts.

---

## Module 6 — Risk Management & Position Sizing

**Learning objective:** The student can define risk per trade in dollars and as a fraction of an account, compute position size from a stop distance (using MNQ's $2/point), explain why stops exist before entries, and state the rule: never risk money needed for living.

**Explanation outline:**
- Risk first: every trade idea starts with "where am I wrong?" — the stop comes before the entry, always.
- Risk per trade: a fixed dollar amount or small account fraction (e.g., illustrative 1%); this is a *ceiling*, not a target.
- Position sizing math: contracts = risk dollars ÷ (stop distance in points × dollars per point). Worked with MNQ $2/point.
- Why micros matter: same math, one-tenth the size — the position-size formula is why micros exist for learners.
- Losing streaks are normal: even sound processes lose several in a row; the math must survive the streak.
- Non-negotiables: never trade money needed for rent/food/bills; never "revenge trade"; never widen a stop because of hope.
- Margin reminder: requirements change — check current requirements with your provider; never trade on memorized numbers.

**Worked-example sketch (illustrative):**
- Account (illustrative) $5,000; risk ceiling 1% = $50 per trade.
- Setup needs a 25-point MNQ stop → 25 × $2 = $50 per contract → exactly 1 contract.
- If the setup needs a 50-point stop → $50 ÷ (50 × $2) = 0.5 → **too big; skip or wait** — the math says no, and "no" is a complete answer.

**Practice exercise:**
1. Compute position size for: $50 risk with 10-, 25-, and 40-point stops on MNQ.
2. Same exercise on MES ($5/point); compare contract counts.
3. Write your personal risk rules: max per trade, max per day, what you do after 3 losses.
4. Journal prompt: "What would I do if my stop were hit five times in a row?"

**Knowledge-check plan (5 questions):** the position-size formula; why the stop comes first; what a risk ceiling is; how streak math works; the non-negotiable rules.

---

## Module 7 — Trading Psychology & Discipline

**Learning objective:** The student can name the common emotional traps (FOMO/chasing, revenge trading, overconfidence after wins, fear after losses), describe a pre-session routine and a set of personal rules, and explain why process — not outcome — is the only honest scoreboard.

**Explanation outline:**
- The real opponent is not the market; it's the impulses the market provokes.
- The traps, plainly named: chasing (FOMO — "we don't chase burning candles"), revenge trading, overconfidence after wins, paralysis after losses, boredom trading.
- Discipline defined: doing what your plan says when your feelings say otherwise.
- The pre-session routine: review plan, set risk limits for the day, define "done" conditions (win *or* loss) — then paper-trade only.
- After a loss: the protocol is pause, breathe, journal, step away — never trade the next five minutes to "get it back."
- The scoreboard: judge the *process* (did I follow my rules?) not the *outcome* (did this paper trade win?). Outcome-thinking is how luck gets confused with skill.
- Losses are tuition in simulation; they are the market's classroom.

**Worked-example sketch (illustrative):**
- Student paper-trades a morning: two small losses following the plan, then a third setup appears — identical quality.
- The undisciplined version: doubles size "to recover." The disciplined version: takes the same size, same stop, journals honestly.
- Lesson: discipline is invisible on winning days and decisive on losing ones.

**Practice exercise:**
1. Write your "trading constitution": 5 personal rules in your own words.
2. Design a 10-minute pre-session routine (review, limits, done-conditions).
3. Recall a time you acted on impulse in any area of life; write what a pause-protocol would have changed.
4. Paper-trade one session scoring *only* rule-following (1 point per rule kept); no profit goal.

**Knowledge-check plan (4 questions):** name three emotional traps; what discipline means operationally; the after-a-loss protocol; why process beats outcome as a scoreboard.

---

## Module 8 — Simulation Practice & Quizzes

**Learning objective:** The student can run a structured paper-trading practice routine, keep a complete trade journal (date, setup, entry, stop, target, outcome, lesson), and self-grade a practice week with a checklist — with zero real-money steps anywhere in the module.

**Explanation outline:**
- Simulation = the laboratory: every concept from Modules 1–7 gets tested here, risk-free.
- The practice routine: pick one session, one chart, one timeframe; define the day's focus (e.g., "mark structure before anything else"); paper-trade a fixed number of setups; stop at the done-condition.
- The journal template: date · setup name · entry · stop · target · outcome (points) · followed plan? (Y/N) · lesson in one sentence. Journals are where learning compounds.
- Review cadence: end-of-day 10 minutes, end-of-week 30 minutes — patterns in *your behavior* matter more than patterns in the market.
- The self-grading checklist: rules followed, risk respected, journal complete, emotions noted, lessons extracted — scored weekly, honestly.
- Graduation standard for Phase I: not profit — *consistency of process* over 20+ journaled paper trades.
- What comes next: Phase II deepens the tools; the student's job now is practice, journaling, and patience. No real money is discussed, suggested, or needed.

**Worked-example sketch (illustrative):**
- A filled journal row: 2026-10-20 · retest of 18,600 zone · entry 18,602 · stop 18,592 (10 pts = $20 risk on 1 MNQ) · target 18,622 · outcome +12 pts paper · followed plan? Yes · lesson: "Waiting for the retest kept me out of the chop."
- Then a "No" row: outcome −10 pts · followed plan? No — moved the stop · lesson: "The stop is the plan; moving it is quitting the plan."

**Practice exercise:**
1. Build your journal (paper or spreadsheet) with all seven columns.
2. Paper-trade 5 sessions, 3 setups max each, journaling every one.
3. Do one end-of-week review; list your top 3 repeated behaviors (good and bad).
4. Score yourself on the checklist; write the one habit to fix next week.

**Knowledge-check plan (5 questions):** the seven journal columns; why simulation comes before anything else; what the review cadence is; what the self-grading checklist measures; what "graduation" from Phase I means (process, not profit).

---

## Cross-module requirements (all 8 pages)
- Tone: warm, plain, honest. "We do not promise profits" stated or clearly implied on every page; numbers labeled illustrative.
- Facts locked: ES $50/pt · MES $5/pt · NQ $20/pt · MNQ $2/pt · 0.25-pt ticks · expirations H/M/U/Z quarterly. Margin: "check current requirements" — never fixed figures.
- RSI: Wilder's 0–100, 14 periods; 70/30 = traditional guides, never signals. VWAP resets each session.
- Strategy framing: mission language only ("wait for the retest," "trade with discipline") — no systems, no entries sold as edges.
- Module 8: simulation only — no real-money steps, no broker guidance, no credentials, no automation.
- Template: exact head/nav/sections/footer as specified in the authoring brief; self-contained, phone-friendly, offline-safe.
