import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/authSlice";
import Modal from "bootstrap/js/dist/modal";

export default function RegisterModal() {
  const dispatch = useDispatch();
  const loading = useSelector((s) => s.auth.loading);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [err, setErr] = useState(null);

  const modalElRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const el = document.getElementById("registerModal");
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

    const ageNum = parseInt(form.age, 10);
    if (!Number.isFinite(ageNum) || ageNum < 18) {
      setErr("You must be at least 18 years old to register.");
      return;
    }
    if (form.password !== form.confirm) {
      setErr("Passwords do not match");
      return;
    }
    if (!form.firstName.trim() || !form.lastName.trim()) {
      setErr("Please enter your first and last name.");
      return;
    }

    try {
      await dispatch(
        register({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          age: ageNum,
          email: form.email.trim(),
          password: form.password,
        })
      ).unwrap();

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

      setForm({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        confirm: "",
      });
    } catch (e2) {
      setErr(Array.isArray(e2) ? e2.join(", ") : String(e2));
    }
  };

  return (
    <div
      className="modal fade"
      id="registerModal"
      tabIndex="-1"
      aria-hidden="true"
      aria-labelledby="registerModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white rounded-3 shadow-lg">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="registerModalLabel">
              Register at Cosmobet
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="regFirstName">
                    First name
                  </label>
                  <input
                    id="regFirstName"
                    type="text"
                    className="form-control"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="regLastName">
                    Last name
                  </label>
                  <input
                    id="regLastName"
                    type="text"
                    className="form-control"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="regAge">
                  Age
                </label>
                <input
                  id="regAge"
                  type="number"
                  min={18}
                  step={1}
                  inputMode="numeric"
                  className="form-control"
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="regEmail">
                  Email
                </label>
                <input
                  id="regEmail"
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="regPass">
                  Password
                </label>
                <input
                  id="regPass"
                  type="password"
                  className="form-control"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                  autoComplete="new-password"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="regPass2">
                  Confirm Password
                </label>
                <input
                  id="regPass2"
                  type="password"
                  className="form-control"
                  value={form.confirm}
                  onChange={(e) =>
                    setForm({ ...form, confirm: e.target.value })
                  }
                  required
                  autoComplete="new-password"
                />
              </div>

              {err && <div className="alert alert-danger py-2">{err}</div>}

              <button
                type="submit"
                className="btn btn-success w-100"
                disabled={loading}
              >
                {loading ? "Creating..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
