// components/FeatureSection.js
import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import styles from "./FeatureSection.module.css";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container spacing={4} className={styles.grid}>
        <Grid item xs={12} md={6} className={styles.textContainer}>
          <Typography variant="h4" component="h2" className={styles.title}>
            Explore the power of AI apps generation
          </Typography>
          <Typography variant="body1" className={styles.subtitle}>
            Unlock the full potential of your tech stack with Horizon&apos;s
            intuitive and Unlock the full potential of your tech stack with
            GenAI&apos;s intuitive and
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/feature-image1.png"
            alt="Feature"
            className={styles.image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/feature-image2.png"
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

export default FeatureSection;
