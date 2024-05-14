// components/Layout.js
import React from "react";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        <span className={styles.highlight}>Essentially</span>, everything you
        need to <br />
        ship your first AI App
      </h1>
      <div className={styles.grid}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}></div>
            <h2>Quality apps</h2>
            <p>
              Identify strengths, capitalize on weaknesses, and chart a course
              for unparalleled success.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
