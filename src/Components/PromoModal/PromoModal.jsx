import React, { useEffect, useRef } from "react";
import Modal from "bootstrap/js/dist/modal";

export default function PromoModal() {
  const modalRef = useRef(null);

  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;

    const modal = Modal.getOrCreateInstance(el);

    const timer = setTimeout(() => {
      modal.show();
      localStorage.setItem("promoModalShown", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="modal fade"
      id="promoModal"
      tabIndex="-1"
      aria-hidden="true"
      aria-labelledby="promoModalLabel"
      ref={modalRef}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white rounded-3 shadow-lg">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="promoModalLabel">
              🎰 Special Offer!
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Закрити"
            ></button>
          </div>
          <div className="modal-body text-center">
            <p>
              Register now and get <b>100 free spins</b> 🎁
            </p>
            <p className="small text-secondary mb-0">*Limited-time offer</p>
          </div>
          <div className="modal-footer border-0 justify-content-center">
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            >
              Register{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
