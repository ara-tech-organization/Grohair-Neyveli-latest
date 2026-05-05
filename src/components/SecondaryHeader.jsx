import React from "react";
import styles from "./SecondaryHeader.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SecondaryHeader = () => {
  return (
    <div className={styles.secondaryHeader}>
      <div className={styles.inner}>
        {/* LEFT SIDE: Phone + Email */}
        <div className={styles.left}>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+9196375 56789"> 96375 56789</a>
          </div>

          <div className={styles.item}>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:neyveli@adgrohair.com">
           neyveli@adgrohair.com
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: SOCIAL ICONS */}
        <div className={styles.right}>
          <a
            href="https://www.facebook.com/adgrohairclinicNeyveli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
          </a>

          <a
            href="https://www.instagram.com/adgrogloclinicNeyveli/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
          </a>

          {/* <a
            href="https://www.youtube.com/@AdGrohairGloskinThanjavur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className={styles.socialIcon} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
