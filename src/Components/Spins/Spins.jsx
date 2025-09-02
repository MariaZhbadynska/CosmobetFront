import React, { useMemo, useState } from "react";
import "./Spins.css";

export default function Spins() {
  const [filter, setFilter] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  const offers = useMemo(
    () => [
      {
        id: "s1",
        title: "100 Free Spins (Welcome)",
        type: "welcome",
        code: null,
        deposit: "$10+",
        wagering: "x30 (FS)",
        game: "Gates of Olympus",
        details:
          "Get 100 free spins in batches over 5 days after your first deposit.",
        tag: "HOT",
        expiry: "7 days after activation",
        color: "#ff4d97",
      },
      {
        id: "s2",
        title: "No-Deposit 20 FS",
        type: "no-deposit",
        code: "FS20START",
        deposit: "No deposit",
        wagering: "x45 (FS)",
        game: "Big Bass Bonanza",
        details:
          "New accounts only. Verify email & phone to unlock your spins.",
        tag: "NEW",
        expiry: "48h validity",
        color: "#22d3ee",
      },
      {
        id: "s3",
        title: "Daily 10 FS (Reload)",
        type: "daily",
        code: null,
        deposit: "$20+ per day",
        wagering: "x30 (FS)",
        game: "Sweet Bonanza",
        details:
          "Make a daily reload and receive 10 spins instantly. One pack per 24h.",
        tag: "DAILY",
        expiry: "24h after credit",
        color: "#a855f7",
      },
      {
        id: "s4",
        title: "Promo Weekend: +50 FS",
        type: "promo",
        code: "WINWEEKEND",
        deposit: "$50+",
        wagering: "x30 (FS)",
        game: "Sugar Rush",
        details:
          "Enter the code on Fri–Sun and grab 50 spins on selected slots.",
        tag: "WEEKEND",
        expiry: "Fri–Sun",
        color: "#f59e0b",
      },
      {
        id: "s5",
        title: "VIP Monthly Pack: 200 FS",
        type: "vip",
        code: null,
        deposit: "By tier",
        wagering: "x25 (FS)",
        game: "Starburst",
        details:
          "VIP tiers receive a monthly free spins airdrop. Check your level.",
        tag: "VIP",
        expiry: "End of month",
        color: "#10b981",
      },
    ],
    []
  );

  const filters = [
    { id: "all", label: "All", icon: "🎛️" },
    { id: "daily", label: "Daily", icon: "🗓️" },
    { id: "no-deposit", label: "No-Deposit", icon: "🆓" },
    { id: "promo", label: "Promo", icon: "🏷️" },
    { id: "welcome", label: "Welcome", icon: "🎁" },
    { id: "vip", label: "VIP", icon: "💎" },
  ];

  const filtered = useMemo(() => {
    if (filter === "all") return offers;
    return offers.filter((o) => o.type === filter);
  }, [filter, offers]);

  const copyCode = async (offer) => {
    if (!offer.code) return;
    try {
      await navigator.clipboard.writeText(offer.code);
      setCopiedId(offer.id);
      setTimeout(() => setCopiedId(null), 1200);
    } catch {}
  };

  return (
    <div className="spins-page bg-black text-white">
      <section className="container-xxl spins-hero">
        <div className="spins-hero__wrap rounded-4 p-4 p-md-5 position-relative overflow-hidden">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="d-inline-flex align-items-center gap-2 mb-3">
                <span className="chip chip-gradient">Free Spins</span>
                <span className="chip chip-ghost">Updated weekly</span>
              </div>
              <h1 className="display-6 fw-bold mb-2">
                Spin Zone — Free Spins Hub
              </h1>
              <p className="text-secondary mb-3">
                Daily drops, no-deposit picks, promo packs and VIP airdrops.
                Find your spins, fast.
              </p>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <a
                  className="btn btn-ghost-success btn-lg rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                  href="#"
                >
                  Get Free Spins
                </a>
                <a className="btn btn-outline-light rounded-pill" href="#how">
                  How it works
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="spins-rail h-100 rounded-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-xxl py-3">
        <div className="scroll-row">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`chip chip-filter ${
                filter === f.id ? "is-active" : ""
              }`}
              onClick={() => setFilter(f.id)}
            >
              <span className="me-1">{f.icon}</span> {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="container-xxl pb-5">
        <div className="row g-4">
          {filtered.map((o) => (
            <div className="col-md-6" key={o.id}>
              <div className="ticket-card h-100 d-flex flex-column">
                <div
                  className="ticket-card__spine"
                  style={{ background: o.color }}
                  aria-hidden="true"
                />
                <div className="ticket-card__body card-dark rounded-4 p-4">
                  <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                    <h3 className="h5 mb-0">{o.title}</h3>
                    {o.tag && (
                      <span className="badge bg-gradient-pink">{o.tag}</span>
                    )}
                  </div>

                  <p className="text-secondary small mb-3">{o.details}</p>

                  <div className="row g-2 small">
                    <div className="col-6 col-lg-3">
                      <div className="kv">
                        <div className="kv__k text-secondary">Deposit</div>
                        <div className="kv__v">{o.deposit}</div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="kv">
                        <div className="kv__k text-secondary">Wagering</div>
                        <div className="kv__v">{o.wagering}</div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="kv">
                        <div className="kv__k text-secondary">Game</div>
                        <div className="kv__v">{o.game}</div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="kv">
                        <div className="kv__k text-secondary">Expiry</div>
                        <div className="kv__v">{o.expiry}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 d-flex flex-wrap gap-2 align-items-center">
                    {o.code ? (
                      <div className="promo-input d-flex align-items-center">
                        <code className="promo-code">{o.code}</code>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-light"
                          onClick={() => copyCode(o)}
                        >
                          {copiedId === o.id ? "Copied" : "Copy"}
                        </button>
                      </div>
                    ) : (
                      <span className="text-secondary small">
                        No code required
                      </span>
                    )}

                    <button
                      className="btn btn-ghost-success rounded-pill ms-auto"
                      data-bs-toggle="modal"
                      data-bs-target="#registerModal"
                    >
                      Claim
                    </button>

                    <button
                      className="btn btn-outline-light rounded-pill"
                      data-bs-toggle="collapse"
                      data-bs-target={`#rules-${o.id}`}
                      aria-expanded="false"
                      aria-controls={`rules-${o.id}`}
                    >
                      Rules
                    </button>
                  </div>

                  <div className="collapse mt-3" id={`rules-${o.id}`}>
                    <div className="rules card-dark-soft rounded-3 p-3 small text-secondary">
                      <p className="mb-2">
                        Free spins are credited on the stated game(s). Winnings
                        may convert to bonus funds and require wagering before
                        withdrawal.
                      </p>
                      <p className="mb-0">
                        Check full T&Cs for country restrictions and max cashout
                        on FS winnings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-12">
              <div className="card-dark rounded-4 p-4 text-center text-secondary">
                No offers match your filter yet.
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="container-xxl pb-5" id="how">
        <h2 className="h4 mb-3">How it works</h2>
        <ol className="timeline">
          {[
            {
              t: "Create an account",
              d: "Register and verify your email/phone.",
            },
            {
              t: "Activate an offer",
              d: "Make a minimum deposit or enter a promo code.",
            },
            {
              t: "Play your spins",
              d: "Open the stated slot and use your free spins.",
            },
            {
              t: "Meet wagering",
              d: "Complete wagering on winnings, then withdraw.",
            },
          ].map((s, i) => (
            <li className="timeline__item" key={i}>
              <div className="timeline__dot" />
              <div className="timeline__content card-dark rounded-3 p-3">
                <div className="small text-secondary">Step {i + 1}</div>
                <div className="fw-semibold">{s.t}</div>
                <div className="small text-secondary mt-1">{s.d}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-xxl pb-5">
        <div className="cta-alt rounded-4 p-4 p-md-5 d-flex flex-column flex-lg-row align-items-center gap-3">
          <div className="flex-grow-1">
            <h3 className="h4 mb-1">Grab your free spins now</h3>
            <p className="text-secondary mb-0">
              Quick registration, clear rules, instant credit on top slots.
            </p>
          </div>
          <div className="d-flex gap-2">
            <a
              className="btn btn-ghost-success btn-lg rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
              href="#"
            >
              Get Free Spins
            </a>
            <a
              className="btn btn-outline-light btn-lg rounded-pill"
              href="#how"
            >
              How it works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
