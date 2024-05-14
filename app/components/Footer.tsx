// components/Footer.js
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={`${styles.section} ${styles.genaiSection}`}>
          <h2 className={styles.title}>GenAI</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>All rights reserved.</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>About</h3>
          <ul className={styles.list}>
            <li>Contact</li>
            <li>Blog</li>
            <li>Story</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Company</h3>
          <ul className={styles.list}>
            <li>Product</li>
            <li>Press</li>
            <li>More</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Press</h3>
          <ul className={styles.list}>
            <li>Careers</li>
            <li>Newsletters</li>
            <li>More</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
