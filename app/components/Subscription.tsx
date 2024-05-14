// components/Subscription.js
import React from "react";
import { Container, Typography, Grid, Button, TextField } from "@mui/material";
import styles from "./Subscription.module.css";

const Subscription = () => {
  return (
    <div className={styles.subscription}>
      <Container maxWidth="md" className={styles.container}>
        <Typography variant="h4" component="h1" className={styles.title}>
          Detect your next <span className={styles.highlight}>big move</span>
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          Experience the synergy of your favorite tools working seamlessly
          together, all powered by Horizon&apos;s cutting-edge AI analytics.
        </Typography>
        <Grid container spacing={2} className={styles.grid}>
          <Grid item xs={12} md={8}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="youremail@gmail.com"
              className={styles.input}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={styles.button}
            >
              Subscribe Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Subscription;
