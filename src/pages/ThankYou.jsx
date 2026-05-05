import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SecondaryHeader from "../components/SecondaryHeader";
import styles from "./ThankYou.module.css";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <>
      <SecondaryHeader />
      <Header />
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.iconWrap}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h1 className={styles.heading}>Thank You!</h1>
          <p className={styles.text}>
            Your appointment has been submitted successfully. We'll get back to
            you shortly to confirm the details.
          </p>
          <button className={styles.btn} onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
