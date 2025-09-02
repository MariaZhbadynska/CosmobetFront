import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import Modal from "bootstrap/js/dist/modal";

export default function LoginModal() {
  const dispatch = useDispatch();
  const loading = useSelector((s) => s.auth.loading);
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState(null);
  const modalElRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const el = document.getElementById("loginModal");
    modalElRef.current = el;
    if (el) {
      modalRef.current = Modal.getOrCreateInstance(el);

      const onHidden = () => {
        document.body.classList.remove("modal-open");
        document.body.style.removeProperty("padding-right");
        document
          .querySelectorAll(".modal-backdrop")
          .forEach((bd) => bd.remove());
      };

      el.addEventListener("hidden.bs.modal", onHidden);
      return () => el.removeEventListener("hidden.bs.modal", onHidden);
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      await dispatch(login(form)).unwrap();

      modalRef.current?.hide();

      setTimeout(() => {
        if (document.querySelector(".modal-backdrop")) {
          document
            .querySelectorAll(".modal-backdrop")
            .forEach((bd) => bd.remove());
          document.body.classList.remove("modal-open");
          document.body.style.removeProperty("padding-right");
        }
      }, 100);
    } catch (e2) {
      setErr(Array.isArray(e2) ? e2.join(", ") : String(e2));
    }
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-hidden="true"
      aria-labelledby="loginModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white rounded-3 shadow-lg">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="loginModalLabel">
              Login
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Закрити"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="loginEmail">
                  Email
                </label>
                <input
                  id="loginEmail"
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="loginPass">
                  Password
                </label>
                <input
                  id="loginPass"
                  type="password"
                  className="form-control"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
              </div>
              {err && <div className="alert alert-danger py-2">{err}</div>}
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
