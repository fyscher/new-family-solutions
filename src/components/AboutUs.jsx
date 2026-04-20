import "../static/css/about-us.css";
import "../static/css/sections.css";
import ModalWrapper from "./ContactModal.jsx";
import founderPhoto from "../static/images/Best.jpg";
import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const values = [
  {
    heading: "Compassion First",
    body: "We lead with empathy. Every family comes to us at a different point in their journey, and we meet them exactly where they are.",
  },
  {
    heading: "Individualised Care",
    body: "No two children are the same. We tailor every support plan to your child's unique strengths, challenges, and goals.",
  },
  {
    heading: "Family Partnership",
    body: "You are the expert on your child. We work alongside you — never ahead of you — as true partners in your family's journey.",
  },
  {
    heading: "Integrity & Professionalism",
    body: "We follow FSCD best-practice standards, because your family deserves nothing less than the highest quality of support.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Banner */}
      <div className="about-us-banner">
        <h1>Our Story</h1>
        <p>
          New Family Solutions was founded out of love, lived experience, and a
          belief that every family deserves to feel supported.
        </p>
      </div>

      {/* Founder */}
      <motion.section
        className="founder-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeIn}
      >
        <span className="section-label">Meet the Founder</span>
        <h2 className="section-heading">Susan Johanson</h2>
        <p className="founder-role">Founder &amp; Director</p>
        <div className="founder-content">
          <img
            src={founderPhoto}
            alt="Susan Johanson, Founder of New Family Solutions"
            className="founder-photo"
          />
          <div className="founder-text">
            <div className="founder-body">
              <p>
                My journey began with a deep passion for supporting children
                with disabilities and the families who love them. Through
                hands-on experience, I saw how powerful early and compassionate
                support could be — but I also witnessed how many families
                struggled to access the care their children truly needed. I
                wanted to do more. I wanted to create something personal,
                respectful, and genuinely supportive — not only for the child,
                but for the entire family.
              </p>
              <p>
                In 2007, I took a leap of faith and founded New Family Solutions
                so I could serve families in a deeper, more meaningful way. What
                began as a small vision has grown into a company built on trust,
                empathy, and dedication. Every child and family we work with
                reminds me why I started. New Family Solutions is not just a
                business — it is my heart, my purpose, and my promise to keep
                showing up for the families who need support the most.
              </p>
            </div>
            <p className="founder-attribution">— Susan Johanson, RCSS, CVRP</p>
          </div>
        </div>
      </motion.section>

      {/* Mission */}
      <motion.section
        className="mission-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeIn}
      >
        <span className="section-label">Our mission</span>
        <h2 className="section-heading">Why we do what we do</h2>
        <p className="mission-body">
          We believe every child deserves understanding, opportunity, and a
          community that cares. We are dedicated to providing structured,
          individualised support — delivered with professionalism, integrity,
          and in line with best-practice standards.
        </p>
      </motion.section>

      {/* Values */}
      <motion.section
        className="values-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <span className="section-label">What guides us</span>
        <h2 className="section-heading">Our values</h2>

        <motion.div
          className="values-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((v) => (
            <motion.div
              key={v.heading}
              className="value-card"
              variants={itemVariants}
            >
              <h3>{v.heading}</h3>
              <p>{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="about-us-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <h3>Ready to take the first step?</h3>
        <p>There&apos;s no pressure and no commitment. Just a conversation.</p>
        <ModalWrapper buttonLabel="Get in touch" />
      </motion.section>
    </div>
  );
};

export default AboutUs;
