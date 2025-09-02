import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import Modal from "bootstrap/js/dist/modal";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();

  const token = useSelector((s) => s.auth.token);
  const user = useSelector((s) => s.auth.user);

  const userName =
    user?.name ||
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    (user?.email ? user.email.split("@")[0] : "");

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const logoutModalRef = useRef(null);
  const onLogout = () => {
    const el = logoutModalRef.current;
    if (!el) return;
    Modal.getOrCreateInstance(el).show();
  };
  const confirmLogout = () => {
    dispatch(logout());
    closeMenu();
    const el = logoutModalRef.current;
    if (el) Modal.getOrCreateInstance(el).hide();
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <button
              className="burger"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <Link to="/" className="logo" onClick={closeMenu}>
              <img src="/imgs/logo.png" alt="Cosmobet" height="35" />
            </Link>

            <nav className="nav nav--left" aria-label="Main menu">
              <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => (isActive ? "is-active" : "")}>
                Home
              </NavLink>
              <NavLink to="/review" onClick={closeMenu} className={({ isActive }) => (isActive ? "is-active" : "")}>
                Review
              </NavLink>
              <NavLink to="/bonus" onClick={closeMenu} className={({ isActive }) => (isActive ? "is-active" : "")}>
                Bonus
              </NavLink>
              <NavLink to="/spins" onClick={closeMenu} className={({ isActive }) => (isActive ? "is-active" : "")}>
                Spins
              </NavLink>
            </nav>

            <div className="nav nav--right">
              {!token ? (
                <div className="nav--right_buttons">
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
                    Login
                  </button>
                  <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#registerModal">
                    Register
                  </button>
                </div>
              ) : (
                <div className="nav--right_buttons">
                  <div className="user-chip">Hi {userName}!</div>
                  <button type="button" className="btn btn-outline-light" onClick={onLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-label="Mobile menu">
        <button className="close-btn" onClick={closeMenu}>✕</button>

        <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => (isActive ? "is-active" : "")}>
          Home
        </NavLink>
        <NavLink to="/review" onClick={closeMenu} className={({ isActive }) => (isActive ? "is-active" : "")}>
          Review
        </NavLink>
        <NavLink to="/bonus" onClick={closeMenu} className={({ isActive }) => (isActive ? "is-active" : "")}>
          Bonus
        </NavLink>
        <NavLink to="/spins" onClick={closeMenu} className={({ isActive }) => (isActive ? "is-active" : "")}>
          Spins
        </NavLink>

        {!token ? (
          <div className="mobile-nav--right_buttons">
            <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={closeMenu}>
              Login
            </button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#registerModal" onClick={closeMenu}>
              Register
            </button>
          </div>
        ) : (
          <div className="mobile-nav--right_buttons">
            <div className="user-chip">Hi {userName}!</div>
            <button onClick={onLogout}>Logout</button>
          </div>
        )}
      </nav>

      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        aria-hidden="true"
        aria-labelledby="logoutModalLabel"
        ref={logoutModalRef}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white rounded-3 shadow-lg">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="logoutModalLabel">Log out?</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Ви впевнені, що хочете вийти?</div>
            <div className="modal-footer border-0">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={confirmLogout}>Yes, log out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
