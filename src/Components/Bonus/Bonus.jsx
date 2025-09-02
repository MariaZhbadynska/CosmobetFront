import React, { useState } from "react";
import "./Bonus.css";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "welcome", label: "Welcome" },
  { id: "free-spins", label: "Free Spins" },
  { id: "cashback", label: "Cashback" },
  { id: "reload", label: "Reload" },
  { id: "tournament", label: "Tournaments" },
];

const BONUSES = [
  {
    id: "b1",
    title: "Welcome Bonus: 100% up to $500 + 100 FS",
    type: "welcome",
    code: null,
    minDeposit: "$10",
    wagering: "x35",
    maxCashout: "No cap (standard limits apply)",
    details:
      "100% matched bonus on your first deposit up to $500. 100 Free Spins are credited in daily batches of 20.",
    notes: ["Slots contribute 100%", "Live games 10%", "Table games 10%"],
    badge: "HOT",
    expiry: "7 days after activation",
  },
  {
    id: "b2",
    title: "Winfest Weekend: +50 Free Spins",
    type: "free-spins",
    code: "WINFEST",
    minDeposit: "$50",
    wagering: "x30 (FS)",
    maxCashout: "$200 from FS",
    details:
      "Use the code during the weekend to get 50 Free Spins on selected slots.",
    notes: ["FS valid 48h", "Selected providers only"],
    badge: "WEEKEND",
    expiry: "Valid Fri–Sun",
  },
  {
    id: "b3",
    title: "10% Weekly Cashback",
    type: "cashback",
    code: null,
    minDeposit: "—",
    wagering: "x5",
    maxCashout: "—",
    details:
      "Cashback is calculated on net losses over the week and credited every Monday.",
    notes: ["Only real-money bets count", "Excludes bonus funds"],
    badge: "NEW",
    expiry: "Every Monday",
  },
  {
    id: "b4",
    title: "Reload Bonus: 50% up to $200",
    type: "reload",
    code: "RE50",
    minDeposit: "$20",
    wagering: "x35",
    maxCashout: "No cap (standard limits apply)",
    details: "Claimable once per day. Keep your run going with an extra boost.",
    notes: ["One claim per 24h", "Slots only for wagering"],
    badge: null,
    expiry: "24h after activation",
  },
  {
    id: "b5",
    title: "Slot Masters Tournament",
    type: "tournament",
    code: null,
    minDeposit: "$10 entry",
    wagering: "—",
    maxCashout: "—",
    details:
      "Climb the leaderboard by racking up wins on featured slots. Prize pool $10,000.",
    notes: ["See tournament rules", "Anti-fraud checks apply"],
    badge: "PRIZE POOL",
    expiry: "Ends on 30th of the month",
  },
];

export default function Bonus() {
  const [filter, setFilter] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  const list = filter === "all" ? BONUSES : BONUSES.filter((b) => b.type === filter);

  const copyCode = async (b) => {
    await navigator.clipboard.writeText(b.code);
    setCopiedId(b.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="bonus-page bg-black text-white">
      <section className="hero container-xxl">
        <div className="hero__wrap rounded-4 p-4 p-md-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="badge bg-gradient-pink mb-3">Bonuses</span>
              <h1 className="display-5 fw-bold mb-2">Cosmobet — Bonuses & Promotions</h1>
              <p className="text-secondary mb-4">
                Pick your offer: welcome boost, free spins, reloads, cashback and tournaments. Transparent rules and quick activation.
              </p>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <a className="btn btn-success btn-lg rounded-pill" data-bs-toggle="modal" data-bs-target="#registerModal" href="#">
                  Register & Claim
                </a>
                <a className="btn btn-outline-light rounded-pill" href="#terms">
                  View Terms
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card-dark rounded-4 p-4 h-100">
                <h3 className="h5 mb-3">Highlights</h3>
                <ul className="list-unstyled small text-secondary mb-0">
                  <li className="mb-2">🎁 Welcome: 100% up to $500 + 100 FS</li>
                  <li className="mb-2">⚡ Fast activation & payouts</li>
                  <li>✅ Clear wagering rules</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-xxl py-4">
        <div className="filter-bar card-dark rounded-4 p-2 p-md-3 d-flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-pill ${filter === f.id ? "is-active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="container-xxl pb-5">
        <div className="row g-4">
          {list.map((b) => (
            <div className="col-md-6" key={b.id}>
              <div className="bonus-card card-dark rounded-4 p-4 h-100 d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                  <h3 className="h5 mb-0">{b.title}</h3>
                  {b.badge && <span className="badge bg-gradient-pink">{b.badge}</span>}
                </div>

                <p className="text-secondary small mb-3">{b.details}</p>

                <div className="row g-2 small">
                  <div className="col-6 col-lg-3">
                    <div className="kv">
                      <div className="kv__k text-secondary">Min. deposit</div>
                      <div className="kv__v">{b.minDeposit}</div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="kv">
                      <div className="kv__k text-secondary">Wagering</div>
                      <div className="kv__v">{b.wagering}</div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="kv">
                      <div className="kv__k text-secondary">Max cashout</div>
                      <div className="kv__v">{b.maxCashout}</div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="kv">
                      <div className="kv__k text-secondary">Expiry</div>
                      <div className="kv__v">{b.expiry}</div>
                    </div>
                  </div>
                </div>

                {b.notes?.length ? (
                  <ul className="text-secondary small mt-3 mb-0 ps-3">
                    {b.notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-3 d-flex flex-wrap gap-2 align-items-center">
                  {b.code ? (
                    <div className="promo-input d-flex align-items-center">
                      <code className="promo-code">{b.code}</code>
                      <button type="button" className="btn btn-sm btn-outline-light" onClick={() => copyCode(b)}>
                        {copiedId === b.id ? "Copied" : "Copy"}
                      </button>
                    </div>
                  ) : (
                    <span className="text-secondary small">No code required</span>
                  )}

                  <button className="btn btn-success rounded-pill ms-auto" data-bs-toggle="modal" data-bs-target="#registerModal">
                    Claim
                  </button>

                  <button
                    className="btn btn-outline-light rounded-pill"
                    data-bs-toggle="collapse"
                    data-bs-target={`#terms-${b.id}`}
                    aria-expanded="false"
                    aria-controls={`terms-${b.id}`}
                  >
                    Terms
                  </button>
                </div>

                <div className="collapse mt-3" id={`terms-${b.id}`}>
                  <div className="terms card-dark-soft rounded-3 p-3 small text-secondary">
                    <p className="mb-2">
                      Standard bonus rules apply. One active bonus at a time. Bonus abuse leads to forfeiture. Country restrictions may apply.
                    </p>
                    <p className="mb-0">Always check the full T&Cs before activating an offer.</p>
                  </div>
                </div>

                <div className="mt-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-xxl pb-5" id="terms">
        <h2 className="h4 mb-3">Bonus Terms & Conditions</h2>
        <div className="accordion accordion-dark" id="bonusTermsAcc">
          {[
            {
              q: "How do wagering requirements work?",
              a: "Wagering x35 means you need to bet the bonus amount 35 times before withdrawal. Slots usually contribute 100%; table and live games may contribute less.",
            },
            {
              q: "Can I have multiple bonuses active?",
              a: "Typically only one active bonus at a time. You can forfeit the current bonus before claiming a new one, but that forfeits related winnings.",
            },
            {
              q: "Do Free Spins have separate rules?",
              a: "Yes, FS winnings may have their own wagering and max cashout rules. Always check the specific offer’s details.",
            },
          ].map((it, i) => {
            const id = `bt-${i}`;
            return (
              <div className="accordion-item" key={id}>
                <h2 className="accordion-header" id={`${id}-h`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}-c`}
                    aria-expanded="false"
                    aria-controls={`${id}-c`}
                  >
                    {it.q}
                  </button>
                </h2>
                <div
                  id={`${id}-c`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`${id}-h`}
                  data-bs-parent="#bonusTermsAcc"
                >
                  <div className="accordion-body text-secondary">{it.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-xxl pb-5">
        <div className="cta card-dark rounded-4 p-4 p-md-5 d-flex flex-column flex-lg-row align-items-center gap-3">
          <div className="flex-grow-1">
            <h3 className="h4 mb-1">Ready to claim a bonus?</h3>
            <p className="text-secondary mb-0">Join Cosmobet and pick the offer that fits your playstyle.</p>
          </div>
          <div className="d-flex gap-2">
            <a className="btn btn-success btn-lg rounded-pill" data-bs-toggle="modal" data-bs-target="#registerModal" href="#">
              Register & Claim
            </a>
            <a className="btn btn-outline-light btn-lg rounded-pill" href="#terms">
              Read Terms
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
