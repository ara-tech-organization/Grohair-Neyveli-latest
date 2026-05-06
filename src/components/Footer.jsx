import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import Footerlogo from "../assets/Neyveli-white.png";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const currentPath = window.location.hash.replace("#", "");
    if (currentPath === "/" || currentPath === "") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo + small text */}
        <div className={styles.brandCol}>
          <img src={Footerlogo} alt="GroHair Logo" className={styles.logo} />
          <p className={styles.tagline}>
            Advanced hair & skin treatments with personalised care.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.heading}>Useful Links</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Testimonials</a>
            </li>
            <li>
              <a href="#BookAppointment" onClick={(e) => { e.preventDefault(); scrollToSection("BookAppointment"); }}>Book Appointment</a>
            </li>
            <li>
              <a href="#Skin-treatments" onClick={(e) => { e.preventDefault(); scrollToSection("Skin-treatments"); }}>Skin Treatments</a>
            </li>
            <li>
              <a href="#Hair-treatments" onClick={(e) => { e.preventDefault(); scrollToSection("Hair-treatments"); }}>Hair Treatments</a>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className={styles.mapCol}>
          <h4 className={styles.heading}>Find Us</h4>
          <div className={styles.mapWrap}>
            {/* Replace src with your real Google Maps embed */}
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
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} GroHair Clinic. All rights reserved.</p>

        <p className={styles.credit}>
          Crafted with Excellence by{" "}
          <a
            href="https://discovertechnologies.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ara Discoveries Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
