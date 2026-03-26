import "../static/css/services.css";
import "../static/css/sections.css";
import ModalWrapper from "./ContactModal.jsx";
import { motion } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Services = () => (
  <motion.section
    id="services"
    className="section section--tinted"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={sectionVariants}
  >
    <span className="section-label">What we offer</span>
    <h2 className="section-heading">Support that fits your family&apos;s needs</h2>
    <p className="section-sub">
      Every family&apos;s journey is different. We offer two paths of support —
      choose what feels right, or ask us to help you decide.
    </p>

    <motion.div
      className="services-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className="service-card" variants={itemVariants}>
        <span className="service-card__icon">👥</span>
        <span className="service-card__tag">Comprehensive support</span>
        <h3>Specialized Services</h3>
        <p>
          A collaborative, multi-disciplinary team works alongside your family
          — in your home — supporting communication, daily living, social
          skills, and more, all coordinated in one place.
        </p>
      </motion.div>

      <motion.div className="service-card" variants={itemVariants}>
        <span className="service-card__icon">🌱</span>
        <span className="service-card__tag">Focused support</span>
        <h3>Behavioural &amp; Developmental Support</h3>
        <p>
          Focused, one-area support designed to help your child build
          confidence, develop new skills, and make meaningful progress — at a
          pace that works for them.
        </p>
      </motion.div>
    </motion.div>

    <div className="services-cta">
      <p>Not sure which is right for you? That&apos;s okay.</p>
      <ModalWrapper buttonLabel="Get in touch — we'll help you find the fit" />
    </div>
  </motion.section>
);

export default Services;
