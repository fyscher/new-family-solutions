import "../static/css/sections.css";
import ModalWrapper from "./ContactModal.jsx";
import { motion } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const steps = [
  {
    number: "01",
    heading: "Reach Out",
    body: "Send us a message at any time. No commitment, no rush, and no wrong questions. We're here to listen first.",
  },
  {
    number: "02",
    heading: "Initial Consultation",
    body: "A gentle, no-pressure conversation to understand your family's situation, your child's strengths, and what kind of support you're looking for.",
  },
  {
    number: "03",
    heading: "Tailored Support Plan",
    body: "Together, we'll build a personalised plan that fits your child's needs and your family's rhythm — and we adjust it as things change.",
  },
];

const HowItWorks = () => (
  <motion.section
    className="section section--light"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={sectionVariants}
  >
    <span className="section-label">Your journey with us</span>
    <h2 className="section-heading">Simple steps. No pressure.</h2>
    <p className="section-sub">
      Starting a new support relationship can feel overwhelming. We&apos;ve made it
      as easy as possible.
    </p>

    <motion.div
      className="steps-list"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {steps.map((step) => (
        <motion.div key={step.number} className="step" variants={itemVariants}>
          <span className="step__number">{step.number}</span>
          <div className="step__content">
            <h3>{step.heading}</h3>
            <p>{step.body}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>

    <div style={{ textAlign: "center" }}>
      <ModalWrapper buttonLabel="Take the first step" />
    </div>
  </motion.section>
);

export default HowItWorks;
