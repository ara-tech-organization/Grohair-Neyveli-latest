import React, { useEffect, useState, useRef } from "react";
import styles from "./HairTreatments.module.css";
import { useNavigate } from "react-router-dom";
import eyebrowTransplant from "/src/assets/Hair Treatments/eyebrow-transplant.webp";
import stemXPro from "/src/assets/Hair Treatments/stem-x-pro.webp";
import mesotherapy from "/src/assets/Hair Treatments/mesotheraphy.jpg";
import oxygenLaser from "/src/assets/Hair Treatments/oxgen-laser-therapy.webp";
import scalpMicro from "/src/assets/Hair Treatments/ScalpMicropigmentation.jpg";

const treatments = [
    {
        id: 1,
        img: eyebrowTransplant,
        title: "Eyebrow Transplant",
        description:
            "Eyebrows frame your face — so why rely on daily pencils and liners? With an Eyebrow Transplant, carefully selected hair follicles from around the ear are implanted into your brow line to restore natural thickness and fullness. The result is long-lasting, fuller eyebrows that enhance your facial features naturally.",
    },
    {
        id: 2,
        img: stemXPro,
        title: "Stem X 27",
        description:
            "Stem X 27 is a cutting-edge, non-invasive treatment designed to stimulate hair follicles, promote hair growth, and strengthen existing hair. Utilizing advanced stem cell technology, this treatment nourishes your scalp, providing the essential growth factors your hair needs for healthier, fuller hair.",
    },
    {
        id: 3,
        img: mesotherapy,
        title: "Mesotherapy",
        description:
            "Hair Mesotherapy is a non-surgical, minimally invasive procedure designed to strengthen and revitalize hair follicles. A carefully customized cocktail of vitamins, amino acids, peptides, and hyaluronic acid is injected directly into the scalp using fine microinjections. This targeted nourishment helps improve blood circulation, reduce hair thinning, and encourage thicker, healthier hair growth. For best results, sessions are typically recommended once every 15 days, with a total of 10–12 sessions.",
    },
    {
        id: 4,
        img: oxygenLaser,
        title: "Oxygen Laser Therapy",
        description:
            "Oxygen Laser Therapy uses oxygen and laser energy to cleanse the scalp, fight dandruff, and stimulate hair growth. It's designed to rejuvenate your scalp, clear away dead skin cells, and promote healthy hair follicles for thicker, stronger hair.",
    },
    {
        id: 5,
        img: scalpMicro,
        title: "Scalp Micropigmentation",
        description:
            "Scalp Micropigmentation (SMP) is a non-invasive cosmetic procedure that creates the illusion of fuller, denser hair by depositing specialized pigments into the scalp using advanced micro-precision technology. It is an effective solution for hair thinning, alopecia, and male or female pattern baldness, helping to achieve a natural shaved-head or density-enhancing look. Each session typically lasts around 4–5 hours, depending on the area being treated.",
    },
];


export default function HairTreatments() {
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
        <section className={styles.wrapper} aria-label="Hair treatments" id="Hair-treatments">
            <div className={styles.inner}>
                <header className={styles.header}>
                    <h2 className={styles.heading}>
                        Our <span>Hair Treatments</span>
                    </h2>
                    <p className={styles.lead}>
                        Professional treatments tailored to restore, strengthen and refresh
                        your hair and scalp.
                    </p>
                </header>

                <div
                    className={styles.panel}
                    onMouseEnter={pauseAutoplay}
                    onMouseLeave={resumeAutoplay}
                >
                    {/* LEFT: featured / big */}
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
                                {/* === NEW: small circular badge image above title === */}
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

                    {/* RIGHT: thumbnails */}
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
                                        {/* <small className={styles.thumbDesc}>
                                            {t.description}
                                        </small> */}
                                    </span>
                                </button>
                            );
                        })}
                    </aside>
                </div>

                {/* Mobile thumbnail scroller indicator */}
                <div className={styles.mobileThumbs} aria-hidden="true">
                    {treatments.map((t, i) => (
                        <button
                            key={t.id}
                            className={`${styles.mobileDot} ${i === index ? styles.mobileDotActive : ""}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to ${t.title}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
