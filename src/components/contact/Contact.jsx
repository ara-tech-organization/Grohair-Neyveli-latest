import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    treatment: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(
        "https://adgrohairgloskinneyveli.in/api/email.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            date: form.date,
            time: form.time,
            treatment: form.treatment,
            message: "",
            source: "Contact Form",
          }),
        }
      );
      const data = await res.json();
      if (data.success) {
        navigate("/thank-you");
        return;
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        {/* Left: Form */}
        <div className={styles.formCard}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.subtext}>
            Book an appointment or ask us anything. We’ll get back to you soon.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Name */}
            <div className={styles.fieldGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email & Phone in row */}
            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Date & Time in row */}
            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label htmlFor="date">Preferred Date</label>
                <input
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="time">Preferred Time</label>
                <input
                  id="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Treatment dropdown */}
            <div className={styles.fieldGroup}>
              <label htmlFor="treatment">Treatment</label>
              <select
                id="treatment"
                value={form.treatment}
                onChange={handleChange}
                required
              >
                <option value="">Select treatment</option>
                <option value="Hair Treatment">Hair Treatment</option>
                <option value="Skin Treatment">Skin Treatment</option>
              </select>
            </div>

            {error && (
              <div className={styles.error} role="alert">{error}</div>
            )}

            {success && (
              <div className={styles.successMsg} role="status">
                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 8 }} />
                Appointment submitted successfully! We'll get back to you soon.
              </div>
            )}

            <button type="submit" className={styles.submitBtn} disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Right: Map */}
        <div className={styles.mapCard}>
          <h3 className={styles.mapHeading}>Find Us</h3>
          <p className={styles.mapText}>We’re located here.</p>

          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.555196240993!2d79.54481187605182!3d11.621874213618868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54b1fa5f54e4c5%3A0x81b7ed99a77b9c06!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Neyveli!5e1!3m2!1sen!2sin!4v1767948294992!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            />
          </div>
        </div>
        <div className={styles.contactInfoGrid}>
          <div className={styles.infoBox}>
            <span className={styles.iconWrap}>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
            <p className={styles.infoTitle}>Phone</p>
            <p className={styles.infoValue}>+9196375 56789</p>
          </div>

          <div className={styles.infoBox}>
            <span className={styles.iconWrap}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <p className={styles.infoTitle}>Email</p>
            <p className={styles.infoValue}>neyveli@adgrohair.com</p>
          </div>

          <div className={styles.infoBox}>
            <span className={styles.iconWrap}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <p className={styles.infoTitle}>Address</p>
            <p className={styles.infoValue}>
              1st floor, No. 15/4 A1, Chennai-Kumbakonam Main Rd, near Suzuki
              Motorcycle, Ashok Nagar, Vadakuthu, Neyveli T.S, Tamil Nadu 607308
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
