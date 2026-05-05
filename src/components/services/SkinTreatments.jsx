import React, { useEffect, useState, useRef } from "react";
import styles from "./SkinTreatments.module.css";
import { useNavigate } from "react-router-dom";
import Microblading from "/src/assets/Skin Treatments/Microblading.jpg";
import WartRemoval from "/src/assets/Skin Treatments/Wart Removal.jpg";
import LaserHairReduction from "/src/assets/Skin Treatments/LaserReduction.jpg";
import Hydrafacial from "/src/assets/Skin Treatments/Hydrafacial.jpg";
import QSwitch from "/src/assets/Skin Treatments/Q-Switch.jpg";
import RFAntiAgingFacial from "/src/assets/Skin Treatments/RF Anti Aging Facial.jpg"
import SkinBrighteningTreatment from "/src/assets/Skin Treatments/Skin brightening.jpg"

const treatments = [
  {
    id: 1,
    img: Microblading,
    title: "Microblading",
    description:
      "Eyebrows play a key role in defining a woman's facial identity. Microblading enhances your brows by implanting fine, hair-like pigment strokes into the superficial layers of the skin, creating a natural and fuller appearance. The procedure takes approximately 3 hours and includes 1 main session followed by 2 follow-up sessions for perfect shape and long-lasting results.",
  },
  {
    id: 2,
    img: WartRemoval,
    title: "Wart Removal",
    description:
      "Wart removal can be done through various methods, depending on the type and severity of the wart.",
  },
  {
    id: 3,
    img: LaserHairReduction,
    title: "Laser Hair Reduction",
    description:
      "Laser hair reduction is a safe and effective procedure that uses advanced laser technology to target and weaken hair follicles, reducing unwanted hair growth over time.",
  },
  {
    id: 4,
    img: Hydrafacial,
    title: "Hydrafacial",
    description:
      "HydraFacial is an advanced, multi-step skin treatment that combines cleansing, exfoliation, gentle chemical peeling, extraction, and intense hydration in a single session using patented vortex technology. Suitable for all skin types, it helps minimize enlarged pores, reduce fine lines, control acne, and restore a brighter, healthier-looking complexion — all with no downtime and instant glow.",
  },
   {
    id: 5,
    img: QSwitch,
    title: "Q-Switch",
    description:
      "At GloSkin, advanced Q-Switched Laser technology is used to effectively treat pigmentation concerns such as melasma, sun damage, and various pigmented lesions including age spots, freckles, sunspots, and certain birthmarks. The laser works by precisely targeting excess melanin in the skin without damaging the surrounding tissue, ensuring safe and effective results. It can also be customized for safe and efficient tattoo removal, delivering clearer and more even-toned skin.",
  },
   {
    id: 6,
    img: RFAntiAgingFacial,
    title: "RF Anti Aging Facial",
    description:
      "Radiofrequency (RF) technology uses controlled high-frequency radio waves to safely and precisely remove skin lesions such as moles, warts, skin tags, freckles, and DPNs. Unlike traditional scalpel excision, RF treatment delivers minimal thermal damage to surrounding tissues, ensuring greater precision, reduced bleeding, and faster healing with minimal discomfort.",
  },
   {
    id: 7,
    img: SkinBrighteningTreatment,
    title: "Skin Brightening Treatment",
    description:
      "Achieve a radiant and even-toned complexion with our advanced skin brightening treatment.",
  },
];

export default function SkinTreatments() {
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(null);
  const navigate = useNavigate();

  const prev = () =>
    setIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
  const next = () => setIndex((prev) => (prev + 1) % treatments.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % treatments.length);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  const pauseAutoplay = () => clearInterval(autoplayRef.current);
  const resumeAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % treatments.length);
    }, 5000);
  };

  return (
    <section className={styles.wrapper} aria-label="Skin treatments" id="Skin-treatments">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            Our <span>Skin Treatments</span>
          </h2>
          <p className={styles.lead}>
            Professional treatments tailored to restore, strengthen and refresh
            your skin.
          </p>
        </header>

        <div
          className={styles.panel}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          {/*
            NOTE: thumbnails / list moved first in DOM for accessibility/SEO.
            CSS uses grid-template-columns: 340px 1fr to place this left.
          */}
          <aside className={styles.list} aria-hidden={false}>
            {treatments.map((t, i) => {
              const active = i === index;
              return (
                <button
                  key={t.id}
                  className={`${styles.thumb} ${active ? styles.activeThumb : ""}`}
                  onClick={() => setIndex(i)}
                  aria-pressed={active}
                  aria-label={`Show ${t.title}`}
                >
                  <span
                    className={styles.thumbImg}
                    style={{ backgroundImage: `url(${t.img})` }}
                    aria-hidden="true"
                  />
                  <span className={styles.thumbMeta}>
                    <strong className={styles.thumbTitle}>{t.title}</strong>
                    {/* <small className={styles.thumbDesc}>{t.description}</small> */}
                  </span>
                </button>
              );
            })}
          </aside>

          {/* FEATURE (right column) */}
          <div className={styles.feature}>
            <button
              className={styles.arrow}
              aria-label="Previous treatment"
              onClick={prev}
            >
              ‹
            </button>

            <article
              className={styles.card}
              key={treatments[index].id}
              aria-roledescription="slide"
              aria-label={`${treatments[index].title}`}
            >
              <div
                className={styles.media}
                style={{ backgroundImage: `url(${treatments[index].img})` }}
                role="img"
                aria-label={treatments[index].title}
              />

              <div className={styles.cardBody}>
                <img
                  src={treatments[index].img}
                  alt={treatments[index].title}
                  className={styles.cardIcon}
                />

                <h3 className={styles.cardTitle}>
                  {treatments[index].title}
                </h3>
                <p className={styles.cardText}>
                  {treatments[index].description}
                </p>
                <div className={styles.ctaRow}>
                  <button
                    className={styles.ctaGhost}
                    onClick={() => navigate("/contact")}
                  >
                    Book consult
                  </button>
                </div>
              </div>
            </article>

            <button
              className={`${styles.arrow} ${styles.right}`}
              aria-label="Next treatment"
              onClick={next}
            >
              ›
            </button>
          </div>
        </div>

        {/* Mobile thumbnail scroller indicator */}
        <div className={styles.mobileThumbs} aria-hidden="true">
          {treatments.map((t, i) => (
            <button
              key={t.id}
              className={`${styles.mobileDot} ${
                i === index ? styles.mobileDotActive : ""
              }`}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${t.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}