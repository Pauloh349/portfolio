"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CertificatesSection() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && close();
    if (isOpen) {
      document.body.classList.add("modal-open");
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <section id="certification">
        <div className="container">
          <h2>Certifications</h2>
          <div className="certificates-grid">
            <button
              className="certificate-card"
              type="button"
              onClick={() => setIsOpen(true)}
              aria-haspopup="dialog"
            >
              <span className="certificate-image-wrapper">
                <Image
                  src="/geminiCert.webp"
                  alt="Google Gemini Academy Certificate"
                  className="certificate-thumbnail"
                  width={300}
                  height={200}
                />
              </span>
              <span className="certificate-title">Google Gemini Academy</span>
            </button>
          </div>
        </div>
      </section>
      {isOpen && (
        <div
          className="certificate-modal active"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-title"
          onMouseDown={(event) =>
            event.target === event.currentTarget && close()
          }
        >
          <div className="modal-content">
            <button
              className="modal-close"
              type="button"
              onClick={close}
              aria-label="Close certificate viewer"
            >
              &times;
            </button>
            <div className="modal-image-wrapper">
              <Image
                src="/geminiCert.webp"
                alt="Google Gemini Academy Certificate"
                fill
                sizes="90vw"
                priority
              />
            </div>
            <p id="certificate-title" className="modal-title">
              Google Gemini Academy
            </p>
          </div>
        </div>
      )}
    </>
  );
}
