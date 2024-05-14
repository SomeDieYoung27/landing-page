// components/Faq.js
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import styles from "./Faq.module.css";

const faqs = [
  {
    question: "What is GenAI?",
    answer:
      "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet.",
  },
  {
    question: "Lorem ipsu dolor sit met lorem ipsum?",
    answer: "Lorem ipsum dolor sit amet.",
  },
  {
    question: "Lorem ipsum dolor sit amet lorem ipsum dolor site amet lorem?",
    answer: "Lorem ipsum dolor sit amet.",
  },
  {
    question: "Lorem ipsum dolor sit amet loremr ipsum?",
    answer: "Lorem ipsum dolor sit amet.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet.",
  },
];

const Faq = () => {
  return (
    <Container maxWidth="sm" className={styles.container}>
      <Typography variant="h4" component="h1" gutterBottom>
        Need Help?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Don’t worry, we got you. Here are some answers for
        <br /> your questions.
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Faq;
