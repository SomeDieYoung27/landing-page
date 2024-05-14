// components/LandingPage.js
import React from "react";
import { Container, Typography, Button, AppBar, Toolbar } from "@mui/material";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" className={styles.logo}>
            GenAI
          </Typography>
          <div className={styles.navLinks}>
            <Typography variant="button" className={styles.navItem}>
              Features
            </Typography>
            <Typography variant="button" className={styles.navItem}>
              Product
            </Typography>
            <Typography variant="button" className={styles.navItem}>
              Testimonial
            </Typography>
            <Typography variant="button" className={styles.navItem}>
              FAQ
            </Typography>
          </div>
          <Button variant="contained" className={styles.navButton}>
            Get started
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <Typography variant="h2" className={styles.heroTitle}>
              Transform Ideas into apps with AI
            </Typography>
            <Typography variant="body1" className={styles.heroSubtitle}>
              Step into a new era of strategic decision-making. Horizon empowers
              businesses in the marketing space with unparalleled success.
            </Typography>
            <Button variant="contained" className={styles.heroButton}>
              Get started
            </Button>
          </div>
          <div className={styles.heroImage}>
            <img
              src="/hero-image.png"
              alt="App screenshot"
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
