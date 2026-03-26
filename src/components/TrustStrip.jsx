import "../static/css/sections.css";
import { motion } from "motion/react";

const stripVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stats = [
  { number: "19+", label: "Years supporting Alberta families" },
  { number: "1–2", label: "Business days response time" },
  { number: "♥", label: "Family-founded. Family-focused. Since 2007." },
];

const TrustStrip = () => (
  <motion.div
    className="trust-strip"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={stripVariants}
  >
    {stats.map((stat) => (
      <div key={stat.number} className="trust-item">
        <span className="trust-item__number">{stat.number}</span>
        <span className="trust-item__label">{stat.label}</span>
      </div>
    ))}
  </motion.div>
);

export default TrustStrip;
