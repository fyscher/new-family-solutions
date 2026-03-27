import "../static/css/our-team.css";
import "../static/css/sections.css";
import ModalWrapper from "./ContactModal.jsx";
import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const clinicians = [
  {
    role: "Speech & Language",
    title: "Speech-Language Pathologist",
    body: "Our Speech-Language Pathologists partner closely with families to identify priority goals in communication and socialization. Rather than a one-size-fits-all approach, they centre each child's individual strengths — then build practical strategies that fit naturally into your family's daily routines. The goal isn't just progress in a session; it's real, functional growth that happens at home, at the table, and in the moments that matter most.",
  },
  {
    role: "Behavior",
    title: "Behavioral Consultant",
    body: "Our Behavioral Consultants work alongside parents and caregivers to build a deeper understanding of how behavior actually works. Their focus isn't on \"fixing\" the child — it's on equipping the adults around them with insight and practical tools. When caregivers learn to recognize and manage their own emotional responses, meaningful change in the child's behavior follows naturally. It's a collaborative, empowering approach rooted in compassion.",
  },
  {
    role: "Occupational Therapy",
    title: "Occupational Therapist",
    body: "Our Occupational Therapists support children across three core areas: self-help, productivity, and leisure. Self-help skills include everyday tasks like dressing, hygiene, toileting, feeding, and sleep routines. For children, productivity is the work of play and learning — our OTs help build attention, focus, and self-regulation to support this. Leisure looks like thriving in the community: the playground, registered programs, and everyday adventures. Together, we help your child build the independence and confidence to participate fully in life.",
  },
  {
    role: "Physical Therapy",
    title: "Physiotherapist",
    body: "Our Physiotherapists address gross motor challenges — from sitting and walking to running, jumping, and balance. They work with families to improve muscle tone, coordination, and physical confidence in a way that feels purposeful and fun. Whether it's learning to ride a bike, swimming, throwing a ball, or simply keeping up at the playground, our PTs help children move through the world with greater ease and joy.",
  },
  {
    role: "Psychology",
    title: "Psychologist",
    body: "The NFS Psychologist is a core member of our collaborative, multidisciplinary team. Working directly with parents and caregivers, they educate and empower families to understand their child's emotional, social, behavioral, cognitive, and learning profile. With that clarity, the psychologist helps identify the child's unique strengths and needs — then supports the development, implementation, and monitoring of concrete, functional strategies. Self-advocacy for both parent and child is woven into every program. When needed, our psychologist also liaises with community services to ensure continuity of support.",
  },
];

const OurTeam = () => {
  return (
    <div className="our-team-page">
      {/* Banner */}
      <div className="our-team-banner">
        <h1>Our Clinical Team</h1>
        <p>
          Every child is different. Our multidisciplinary team brings together
          specialists across five disciplines — so your family always has the
          right support, at the right time.
        </p>
      </div>

      {/* Team Grid */}
      <motion.section
        className="our-team-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={fadeIn}
      >
        <span className="section-label">Who we are</span>
        <h2 className="section-heading">Meet the specialists</h2>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {clinicians.map((c) => (
            <motion.div key={c.title} className="team-card" variants={itemVariants}>
              <span className="team-card__role">{c.role}</span>
              <h2>{c.title}</h2>
              <p>{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="our-team-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <h3>Not sure where to start?</h3>
        <p>
          We&apos;ll listen first — then help you figure out which support fits
          your child best.
        </p>
        <ModalWrapper buttonLabel="Talk to our team" />
      </motion.section>
    </div>
  );
};

export default OurTeam;
