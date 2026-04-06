import "../static/css/contact.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ContactModal = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [childFirstName, setChildFirstName] = useState("");
  const [childLastName, setChildLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [howHeard, setHowHeard] = useState("");
  const [fscd, setFscd] = useState("");
  const [program, setProgram] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  return (
    <motion.div
      className="overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Header */}
        <div className="modal-header">
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
          <h2>Contact Us</h2>
          <p>
            Whether you&apos;re looking to inquire about services, make a
            referral, ask a question, or explore how we can support your child
            or family — we&apos;re here to help. A member of our team will
            respond within <strong>1–2 business days</strong>.
          </p>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          {/* Your Name */}
          <div className="form-group">
            <span className="form-label">
              Your Name <span className="required">*</span>
            </span>
            <div className="form-row">
              <div className="form-group">
                <input
                  required
                  className="form-input"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  required
                  className="form-input"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Child's Name */}
          <div className="form-group">
            <span className="form-label">Your Child&apos;s Name</span>
            <div className="form-row">
              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  placeholder="First name"
                  value={childFirstName}
                  onChange={(e) => setChildFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Last name"
                  value={childLastName}
                  onChange={(e) => setChildLastName(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* How did you hear */}
          <div className="form-group">
            <label className="form-label" htmlFor="how-heard">
              How did you hear about us?
            </label>
            <input
              id="how-heard"
              className="form-input"
              type="text"
              placeholder="e.g. Google, a friend, FSCD worker..."
              value={howHeard}
              onChange={(e) => setHowHeard(e.target.value)}
            />
          </div>

          {/* FSCD */}
          <div className="form-group">
            <span className="form-label">
              Do you have a Family Supports for Children with Disabilities
              (FSCD) Agreement in place?
            </span>
            <div className="radio-pills">
              <label className="radio-pill">
                <input
                  type="radio"
                  name="fscd"
                  value="yes"
                  checked={fscd === "yes"}
                  onChange={() => setFscd("yes")}
                />
                Yes
              </label>
              <label className="radio-pill">
                <input
                  type="radio"
                  name="fscd"
                  value="no"
                  checked={fscd === "no"}
                  onChange={() => setFscd("no")}
                />
                No
              </label>
            </div>
          </div>

          {/* Program */}
          <div className="form-group">
            <span className="form-label">
              Which program are you interested in?
            </span>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="program"
                  value="specialized-services"
                  checked={program === "specialized-services"}
                  onChange={() => setProgram("specialized-services")}
                />
                <span className="radio-dot" />
                <span className="radio-option-label">
                  <strong>Specialized Services</strong>
                  Our collaborative, multi-disciplinary team works alongside
                  families in the home to support a broad range of needs and
                  skill development.
                </span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="program"
                  value="behavioural-support"
                  checked={program === "behavioural-support"}
                  onChange={() => setProgram("behavioural-support")}
                />
                <span className="radio-dot" />
                <span className="radio-option-label">
                  <strong>Behavioral / Developmental Support</strong>
                  Focused support to help your child develop positive behaviors,
                  build confidence, and make meaningful change.
                </span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="program"
                  value="unsure"
                  checked={program === "unsure"}
                  onChange={() => setProgram("unsure")}
                />
                <span className="radio-dot" />
                <span className="radio-option-label">
                  I&apos;m not sure — I have questions
                </span>
              </label>
            </div>
          </div>

          {/* Contact Info */}
          <div className="form-group">
            <span className="form-label">
              Contact Information <span className="required">*</span>
            </span>
            <div className="form-row">
              <div className="form-group">
                <input
                  required
                  className="form-input"
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  required
                  className="form-input"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Preferred contact method */}
          <div className="form-group">
            <span className="form-label">I prefer to hear back by:</span>
            <div className="radio-pills">
              <label className="radio-pill">
                <input
                  type="radio"
                  name="contact-method"
                  value="phone"
                  checked={contactMethod === "phone"}
                  onChange={() => setContactMethod("phone")}
                />
                Phone
              </label>
              <label className="radio-pill">
                <input
                  type="radio"
                  name="contact-method"
                  value="email"
                  checked={contactMethod === "email"}
                  onChange={() => setContactMethod("email")}
                />
                Email
              </label>
            </div>
          </div>

          <button type="submit" className="form-submit">
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

const ModalWrapper = ({ buttonLabel = "Contact" }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="modal-wrapper">
      <button className="open-button" onClick={() => setIsOpen(true)}>
        {buttonLabel}
      </button>
      <AnimatePresence mode="wait">
        {isOpen && <ContactModal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default ModalWrapper;
