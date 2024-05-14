// components/DynamicFeatureSection.js
import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import styles from "./DynamicFeatureSection.module.css";

const features = [
  {
    title: "Unleash the power of AI with GenAI",
    description:
      "Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and",
    image: "/feature-image1.png",
    imageAlt: "Feature Image 1",
  },
];

const DynamicFeatureSection = () => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      {features.map((feature, index) => (
        <Grid container spacing={4} className={styles.grid} key={index}>
          <Grid
            item
            xs={12}
            md={6}
            className={
              index % 2 === 0
                ? styles.textContainerLeft
                : styles.textContainerRight
            }
          >
            <Typography variant="h4" component="h2" className={styles.title}>
              <span className={styles.highlight}>Unleash</span> the power of AI
              with GenAI
            </Typography>
            <Typography variant="body1" className={styles.subtitle}>
              {feature.description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="/feature-image2.png"
              alt={feature.imageAlt}
              className={styles.image}
            />
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default DynamicFeatureSection;
