// FaqSectionModern.jsx
// Modern, professional, and innovative FAQ section.
// Features: searchable, category tabs, single-open accordion with smooth animation,
// keyboard accessible, subtle micro-interactions, and clean glass-card design.

import React, { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import styles from './FaqSection.module.css';

const DATA = {
  hair: [
    { q: 'What treatments do you offer for hair loss?', a: 'We offer advanced hair restoration treatments including Hair Transplant (FUE), Mesotherapy, Scalp Micropigmentation, CHS (Comprehensive Hair Solutions), and Oxygen Laser Therapy (OLT).' },
    { q: 'How does a hair transplant work?', a: 'Hair transplant involves relocating healthy hair follicles from the donor area to areas experiencing hair thinning or baldness. We use advanced FUE techniques to deliver precise, natural-looking results.' },
    { q: 'Is hair transplantation a permanent solution?', a: 'Yes, hair transplantation provides permanent results as the transplanted hair follicles are resistant to balding.' },
    { q: 'How long does it take to see results after a hair transplant?', a: 'Initial growth begins around 3-4 months, with full results visible after 12-18 months.' },
    { q: 'What is PRP therapy, and how does it help with hair growth?', a: 'PRP therapy uses your own blood, processed to extract growth factors, which are then injected into the scalp to stimulate hair follicles and promote regrowth.' },
    { q: 'Are there any side effects of hair treatments?', a: 'Most treatments are safe with minimal side effects, such as mild redness, swelling, or temporary shedding. Our experts ensure personalized care to minimize any risks.' },
    { q: 'How much does a hair transplant cost at GroHair?', a: 'We know choosing a hair transplant is both a personal and financial decision. The cost depends on your specific hair condition and treatment plan. That\'s why we offer a detailed consultation to evaluate your needs and provide honest, customized pricing tailored just for you.' },
    { q: 'How do I book an appointment?', a: 'Booking an appointment is quick and hassle-free. Simply click the "Book an Appointment" button on our website, call our clinic, or leave your details — and our team will promptly get in touch to confirm your preferred time.' },
  ],
  skin: [
    { q: 'What skincare treatments do you offer?', a: 'We provide treatments for acne, pigmentation, anti-aging, skin rejuvenation, laser hair removal, chemical peels, hydrafacials, and microneedling.' },
    { q: 'How do I know which facial treatment is right for me?', a: 'Our skin specialists assess your skin type and concerns during a consultation and recommend the best treatment for your needs.' },
    { q: 'Is laser hair removal safe?', a: 'Yes, our advanced laser technology is FDA-approved and safe for all skin types, providing long-term hair reduction with minimal discomfort.' },
    { q: 'How many sessions are required for laser hair removal?', a: 'Typically, 6–8 sessions are required for optimal results, depending on hair type, skin tone, and treatment area.' },
    { q: 'Do skin treatments have side effects?', a: 'Most treatments have minimal side effects, such as temporary redness or sensitivity. We provide aftercare instructions to ensure smooth recovery.' },
    { q: 'Do you provide anti-aging treatments?', a: 'Yes, we offer Botox, fillers, skin tightening, and collagen-boosting therapies to reduce wrinkles and restore youthful skin.' },
    { q: 'What products do you recommend for daily skincare?', a: 'Yes, we offer Botox, fillers, skin tightening, and collagen-boosting therapies to reduce wrinkles and restore youthful skin.' },
    { q: 'How do I book an appointment at GloSkin?', a: 'You can schedule an appointment online, via phone, or by visiting our clinic for a personalized consultation.' },
  ]
};

function highlight(text = '', term = '') {
  if (!term) return text;
  const safeTerm = term.replace(/[-\\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const re = new RegExp(`(${safeTerm})`, 'ig');
  return text.replace(re, '<mark>$1</mark>');
}

export default function FaqSectionModern() {
  const [tab, setTab] = useState('hair');
  const [open, setOpen] = useState(null);
  const [query, setQuery] = useState('');

  const faqs = useMemo(() => DATA[tab].filter(item => {
    if (!query) return true;
    const t = (item.q + ' ' + item.a).toLowerCase();
    return t.includes(query.toLowerCase());
  }), [tab, query]);

  return (
    <section className={styles.section} aria-label="Frequently asked questions">
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <h2 className={styles.heading}>Got questions?</h2>
          <p className={styles.sub}>Concise answers from our experts — quick to read, easy to act on.</p>
        </div>

        <div className={styles.tools}>
          <div className={styles.tabs} role="tablist" aria-label="FAQ categories">
            <button role="tab" aria-selected={tab === 'hair'} onClick={() => { setTab('hair'); setOpen(null); }} className={`${styles.tab} ${tab === 'hair' ? styles.active : ''}`}>Hair</button>
            <button role="tab" aria-selected={tab === 'skin'} onClick={() => { setTab('skin'); setOpen(null); }} className={`${styles.tab} ${tab === 'skin' ? styles.active : ''}`}>Skin</button>
          </div>

          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" aria-hidden>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
            <input
              className={styles.search}
              placeholder="Search questions..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpen(null); }}
              aria-label="Search FAQs"
            />
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.leftCard}>
          <h3 className={styles.leftTitle}>Need personalised help?</h3>
          <p className={styles.leftText}>Book a quick consultation — our experts can analyse your scalp and skin within minutes.</p>
          <div className={styles.leftActions}>
            {/* Smooth Scroll to Appointment Section */}
            <button
              className={styles.primary}
              onClick={() =>
                document.getElementById("BookAppointment")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Book a consult
            </button>

            {/* Navigate to Contact Page */}
            <Link to="/contact">
              <button className={styles.light}>Contact us</button>
            </Link>
          </div>
        </div>

        <div className={styles.list}>
          {faqs.length === 0 && (
            <div className={styles.empty}>No results — try different keywords.</div>
          )}

          {faqs.map((item, idx) => {
            const index = idx;
            const isOpen = open === index;
            return (
              <div key={index} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button
                  className={styles.q}
                  onClick={() => setOpen(isOpen ? null : index)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(isOpen ? null : index); } }}
                  aria-expanded={isOpen}
                >
                  <span className={styles.qLeft}>
                    <span className={styles.badge}>Q</span>
                    <span className={styles.qText} dangerouslySetInnerHTML={{ __html: highlight(item.q, query) }} />
                  </span>

                  <span className={styles.qRight}>
                    {/* <span className={styles.time}>Quick</span> */}
                    <span className={styles.chev} aria-hidden>{isOpen ? (<svg width="18" height="18" viewBox="0 0 24 24"><path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>) : (<svg width="18" height="18" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>)}</span>
                  </span>
                </button>

                <div className={styles.a} style={{ maxHeight: isOpen ? '240px' : 0 }}>
                  <p dangerouslySetInnerHTML={{ __html: highlight(item.a, query) }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


