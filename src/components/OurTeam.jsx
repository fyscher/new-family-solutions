import "../static/css/our-team.css";
import { Helmet } from "react-helmet-async";
import { pages, SITE_NAME } from "../seo.js";
import "../static/css/sections.css";
import ModalWrapper from "./ContactModal.jsx";
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
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
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
    body: "Our Behavioral Consultants work alongside parents and caregivers to build a deeper understanding of how behavior works. Their focus isn’t on ‘fixing’ the child—it’s on supporting the adults in their life with practical tools and strategies that make everyday situations more manageable. As caregivers learn to recognize and manage their own emotional responses, meaningful changes in the child’s behavior often follow, creating a more collaborative and empowering approach.",
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
    role: "Coordination",
    title: "Program Coordinator",
    body: "The Program Coordinator is the central leader in your child’s support journey, guiding families through the intake process, liaising with FSCD, and coordinating the entire team. They oversee your child’s program plan, provide strategic guidance to clinicians and parents, prepare essential reports, and ensure smooth collaboration between families, FSCD, and other professionals—delivering seamless, family-centered support every step of the way.",
  },
  {
    role: "Speech & Language",
    title: "Speech-Language Pathology Assistant",
    body: "SLP-Assistants work closely with a Speech-Language Pathologist to provide focused, hands-on support in key communication areas. They reinforce therapy goals through structured, engaging activities, helping children build real-world skills and confidence while supporting success in everyday life. SLP-Assistants are involved on a short-term, as-needed basis to provide extra support when it’s most helpful for your child and family.",
  },
];

const { title, description, canonical, ogType } = pages.ourTeam;

const OurTeam = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

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
            <motion.div
              key={c.title}
              className="team-card"
              variants={itemVariants}
            >
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
    </>
  );
};

export default OurTeam;
