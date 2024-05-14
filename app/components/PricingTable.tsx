// components/PricingTable.js
import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import styles from "./PricingTable.module.css";

const plans = [
  {
    name: "Explorer",
    price: "$4.99/mo",
    features: [
      "Market Trend Analysis",
      "Limited Query Mapping",
      "Standard Dashboards",
      "Email Notifications",
      "Entry-Level Support",
    ],
    buttonLabel: "Get now",
  },
  {
    name: "Innovator",
    price: "$19.99/mo",
    bestValue: true,
    features: [
      "Everything in Explorer, plus:",
      "Predictive Analytics",
      "Advanced Query Mapping",
      "Customizable Dashboards",
      "Smart Alert System",
      "Extended Support",
    ],
    buttonLabel: "Get now",
  },
  {
    name: "Visionary",
    price: "$49.99/mo",
    features: [
      "Everything in Innovator, plus:",
      "Competitor Benchmarking",
      "Holistic Market Visualization",
      "Adaptive Strategy Planner",
      "24/7 Priority Support",
      "Custom Integrations",
    ],
    buttonLabel: "Get now",
  },
];

const PricingTable = () => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Typography variant="h4" component="h1" className={styles.title}>
        Start making <span className={styles.highlight}>smarter</span>{" "}
        decisions, <br />
        Choose a plan
      </Typography>
      <Grid container spacing={4} className={styles.grid}>
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index} className={styles.card}>
            <Typography variant="h5" component="h2" className={styles.planName}>
              {plan.name}
            </Typography>
            <Typography variant="h4" component="p" className={styles.planPrice}>
              {plan.price}
            </Typography>
            <ul className={styles.featureList}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant="contained"
              className={
                plan.bestValue ? styles.bestValueButton : styles.button
              }
            >
              {plan.buttonLabel}
            </Button>
          </Grid>
        ))}
      </Grid>
      <div className={styles.footer}>
        <span className={styles.footerItem}>🟠 Free trial</span>
        <span className={styles.footerItem}>🟠 Cancel anytime</span>
        <span className={styles.footerItem}>🟠 Support included</span>
      </div>
    </Container>
  );
};

export default PricingTable;
