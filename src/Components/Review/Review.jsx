import React from "react";

export default function Review() {
  return (
    <div>
      <div className="review-page bg-black text-white">
        <section className="hero container-xxl">
          <div className="hero__wrap rounded-4 p-4 p-md-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span className="badge bg-gradient-pink mb-3">
                  Casino Review
                </span>
                <h1 className="display-5 fw-bold mb-2">
                  Cosmobet — Detailed Review
                </h1>
                <p className="text-secondary mb-4">
                  Welcome bonuses for new players, fast payouts, top slots and live casino.
                  Here’s everything you need to know — in simple terms.
                </p>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <a
                    className="btn btn-success btn-lg rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                    href="#"
                  >
                    Register
                  </a>
                  <a className="btn btn-outline-light rounded-pill" href="#faq">
                    Go to FAQ
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="summary card-dark rounded-4 p-4 h-100">
                  <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                    <img src="/imgs/logo.png" alt="Cosmobet" height="42" />
                    <div className="stars" aria-label="Rating 4.7 out of 5">
                      <span>★★★★★</span>
                      <span className="stars__fill" style={{ width: "94%" }}>
                        ★★★★★
                      </span>
                    </div>
                    <div className="ms-auto">
                      <span className="fs-5">4.7</span>
                      <small className="text-secondary">/5</small>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-0 small text-secondary">
                    <li className="mb-2">🎁 Welcome package: up to 100% + 100 FS</li>
                    <li className="mb-2">⚡ Instant deposits & fast withdrawals</li>
                    <li>🎮 3000+ games: slots, live, mini games, eSports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-xxl py-5">
          <div className="row g-3 g-md-4">
            {[
              { t: "Welcome Bonus", v: "100% + 100 FS" },
              { t: "Promo code", v: "WINFEST" },
              { t: "Wagering", v: "x35" },
              { t: "Min. deposit", v: "$10" },
              { t: "Payout speed", v: "up to 24h" },
              { t: "Providers", v: "NetEnt, Pragmatic, etc." },
            ].map((it, i) => (
              <div className="col-6 col-lg-4" key={i}>
                <div className="card-dark rounded-4 p-3 p-md-4 h-100">
                  <div className="text-secondary small">{it.t}</div>
                  <div className="fs-5 fw-semibold mt-1">{it.v}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-xxl pb-5">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card-dark rounded-4 p-4 h-100">
                <h3 className="h5 mb-3">Pros</h3>
                <ul className="list-unstyled mb-0 pros">
                  {[
                    "Generous welcome bonus",
                    "Lots of providers and live tables",
                    "Convenient payments & fast withdrawals",
                    "Smooth mobile experience",
                  ].map((p, i) => (
                    <li key={i}>✔ {p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-dark rounded-4 p-4 h-100">
                <h3 className="h5 mb-3">Cons</h3>
                <ul className="list-unstyled mb-0 cons">
                  {[
                    "Some bonuses require a promo code",
                    "Wagering for free spins is above average",
                  ].map((c, i) => (
                    <li key={i}>✖ {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container-xxl pb-5" id="bonuses">
          <h2 className="h4 mb-3">Current bonuses</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-dark rounded-4 p-4 h-100 d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h3 className="h5 mb-0">Welcome: 100% + 100 FS</h3>
                  <span className="badge bg-gradient-pink">HOT</span>
                </div>
                <p className="text-secondary small mb-3">
                  Min. deposit $10 • Wagering x35 • FS credited in batches
                </p>
                <div className="mt-auto d-flex gap-2">
                  <button
                    className="btn btn-success rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                  >
                    Claim bonus
                  </button>
                  <button className="btn btn-outline-light rounded-pill">
                    Terms
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-dark rounded-4 p-4 h-100 d-flex flex-column">
                <h3 className="h5">Winfest Weekend: +50 FS</h3>
                <p className="text-secondary small mb-3">
                  Promo code <b>WINFEST</b> • Deposit from $50 • FS on selected slots
                </p>
                <div className="mt-auto d-flex gap-2">
                  <button
                    className="btn btn-primary rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                  >
                    Activate
                  </button>
                  <button className="btn btn-outline-light rounded-pill">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-xxl pb-5" id="faq">
          <h2 className="h4 mb-3">FAQ</h2>
          <div className="accordion accordion-dark" id="faqAcc">
            {[
              {
                q: "How do I get the welcome bonus?",
                a: "Register and make your first deposit from $10 — the bonus + free spins are activated automatically or via promo code if required.",
              },
              {
                q: "What are the withdrawal limits?",
                a: "Typically up to $2,000/day (example); exact limits and timing depend on the method. Verification may be required.",
              },
              {
                q: "Is there a demo mode?",
                a: "Most slots allow demo play without a deposit — handy to test the mechanics.",
              },
            ].map((item, i) => {
              const id = `faq-${i}`;
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
                      {item.q}
                    </button>
                  </h2>
                  <div
                    id={`${id}-c`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`${id}-h`}
                    data-bs-parent="#faqAcc"
                  >
                    <div className="accordion-body text-secondary">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container-xxl pb-5">
          <div className="cta card-dark rounded-4 p-4 p-md-5 d-flex flex-column flex-lg-row align-items-center gap-3">
            <div className="flex-grow-1">
              <h3 className="h4 mb-1">Ready to try?</h3>
              <p className="text-secondary mb-0">
                Claim the welcome bonus and 100 free spins — quick and easy.
              </p>
            </div>
            <div className="d-flex gap-2">
              <a
                className="btn btn-success btn-lg rounded-pill"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
                href="#"
              >
                Register
              </a>
              <a className="btn btn-outline-light btn-lg rounded-pill" href="#">
                Learn more
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
