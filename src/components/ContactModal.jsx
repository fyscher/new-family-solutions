import "../static/css/contact.css";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function loadRecaptcha() {
  if (document.getElementById("recaptcha-script")) return;
  const script = document.createElement("script");
  script.id = "recaptcha-script";
  script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
  script.async = true;
  document.head.appendChild(script);
}

function getRecaptchaToken() {
  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "contact" })
        .then(resolve)
        .catch(reject);
    });
  });
}

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
  const [botField, setBotField] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => { loadRecaptcha(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const recaptchaToken = await getRecaptchaToken();

      const res = await fetch("/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          childFirstName,
          childLastName,
          howHeard,
          fscd,
          program,
          phone,
          email,
          contactMethod,
          botField,
          recaptchaToken,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || `${res.status}`);
      setSubmitStatus("success");
    } catch (err) {
      setErrorMessage(err.message || "Something went wrong. Please try again or contact us directly.");
      setSubmitStatus("error");
    }
  };

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
          <a href="tel:5877351713" className="modal-phone">587-735-1713</a>
          <p className="modal-location">
            Edmonton &middot; St. Albert &middot; Sherwood Park &middot; Leduc
            &middot; Spruce Grove &middot; and surrounding communities
          </p>
        </div>

        {/* Form */}
        {submitStatus === "success" ? (
          <div className="form-success">
            <p>
              Thank you! Your message has been received. A member of our team
              will be in touch within <strong>1–2 business days</strong>.
            </p>
            <button className="form-submit" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot — hidden from users, catches bots */}
            <input
              type="text"
              name="botField"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Your Name */}
            <div className="form-group">
              <span className="form-label">
                Your Name <span className="required">*</span>
              </span>
              <div className="form-row">
                <div className="form-group">
                  <input
                    required
                    name="firstName"
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
                    name="lastName"
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
                    name="childFirstName"
                    className="form-input"
                    type="text"
                    placeholder="First name"
                    value={childFirstName}
                    onChange={(e) => setChildFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="childLastName"
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
                name="howHeard"
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
                    name="phone"
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
                    name="email"
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
                    name="contactMethod"
                    value="phone"
                    checked={contactMethod === "phone"}
                    onChange={() => setContactMethod("phone")}
                  />
                  Phone
                </label>
                <label className="radio-pill">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={contactMethod === "email"}
                    onChange={() => setContactMethod("email")}
                  />
                  Email
                </label>
              </div>
            </div>

            {submitStatus === "error" && (
              <p className="form-error" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="form-submit"
              disabled={submitStatus === "submitting"}
            >
              {submitStatus === "submitting" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
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
