// components/FeatureSection.js
import React from "react";
import { Container, Typography } from "@mui/material";
import styles from "./Feature.module.css";

const Feature = () => {
  return (
    <Container maxWidth="md" className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h3" component="h1" className={styles.title}>
          Explore the power of
        </Typography>
        <Typography variant="h3" component="h1" className={styles.title}>
          AI apps generation
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          Unlock the full potential of your tech stack with Horizon intuitive
          and Unlock the full potential of your tech stack with GenAI intuitive
          and
        </Typography>
      </div>
    </Container>
  );
};

export default Feature;
