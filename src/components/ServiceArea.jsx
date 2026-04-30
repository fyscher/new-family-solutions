import "../static/css/sections.css";
import { motion } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const communities = [
  "Edmonton",
  "St. Albert",
  "Sherwood Park",
  "Leduc",
  "Spruce Grove",
  "Stony Plain",
  "Fort Saskatchewan",
  "Beaumont",
  "Devon",
  "Morinville",
  "Nearby communities",
];

const ServiceArea = () => (
  <motion.section
    className="section section--tinted"
    style={{ textAlign: "center" }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
  >
    <span className="section-label">Where we serve</span>
    <h2 className="section-heading">
      Rooted in Edmonton. Here for your community.
    </h2>
    <p className="section-sub">
      We provide in-home support throughout the Edmonton region — coming to you,
      wherever you call home.
    </p>

    <motion.div
      className="service-area__pills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {communities.map((name) => (
        <motion.span
          key={name}
          className="service-area__pill"
          variants={itemVariants}
        >
          {name}
        </motion.span>
      ))}
    </motion.div>
  </motion.section>
);

export default ServiceArea;
