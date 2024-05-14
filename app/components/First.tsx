// components/FeatureSection.js
import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import styles from "./First.module.css";

const First = () => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container spacing={4} className={styles.grid}>
        <Grid item xs={10} md={6}>
          <img
            src="/feature-image3.png"
            alt="Feature"
            className={styles.image}
          />
        </Grid>
        <Grid item xs={12} md={6} className={styles.textContainer}>
          <Typography variant="h4" component="h2" className={styles.title}>
            <span className={styles.highlight}>Unleash</span> the power of AI
            with GenAI
          </Typography>
          <Typography variant="body1" className={styles.subtitle}>
            Stay ahead of the curve with our Dynamic Trend Analysis feature.
            Unlock the full potential of your tech stack with Horizon&apos;s
            intuitive and Stay ahead of the curve with our Dynamic Trend
            Analysis feature. Unlock the full potential of your tech stack with
            Horizon&apos;s intuitive and
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default First;
