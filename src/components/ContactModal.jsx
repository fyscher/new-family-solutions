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
  const [, setContact] = useState(false);

  const changeFirst = (e) => setFirstName(e.target.value);
  const changeLast = (e) => setLastName(e.target.value);
  const changeChildFirst = (e) => setChildFirstName(e.target.value);
  const changeChildLast = (e) => setChildLastName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changePhone = (e) => setPhone(e.target.value);

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
        <>
          <div className="i-header">
            <h2>Contact Us</h2>
            <h3 className="i-h4">We'd love to hear from you.</h3>
            <h4>
              Whether you’re looking to inquire about services, make a referral,
              ask a question, or explore how we can support your child or
              family, we’re here to help.
            </h4>
            <h4>
              Please reach out using our contact form and a member of our team
              will respond within 1–2 business days.
            </h4>
          </div>
          <form className="contact">
            <input
              required
              placeholder="First Name"
              type="text"
              className="first"
              value={firstName}
              onChange={changeFirst}
            />
            <input
              required
              placeholder="Last Name"
              type="text"
              className="last"
              value={lastName}
              onChange={changeLast}
            />
            <br />
            <input
              required
              placeholder="You Child's First Name"
              type="text"
              className="first"
              value={childFirstName}
              onChange={changeChildFirst}
            />
            <input
              required
              placeholder="Your Child's Last Name"
              type="text"
              className="last"
              value={childLastName}
              onChange={changeChildLast}
            />
            <br />
            <textarea
              required
              placeholder="How did you hear about us?"
              className="inquiry"
            ></textarea>
            <br />
            <p>
              Do you have a Family Supports for Children with Disabilities
              (FSCD) Agreement in place?
            </p>
            <label>
              <input
                type="radio"
                name="FSCD"
                id="radio-yes"
                className="radio"
                value="yes"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="FSCD"
                id="radio-no"
                className="radio"
                value="no"
              />
              No
            </label>
            <br />
            <p>What program are you interested in?</p>
            <label>
              <input
                type="radio"
                name="program"
                id="radio-specialized-services"
                className="radio"
                value="specialized-services"
              />
              Specialized Services – Our collaborative, multi-disciplinary team
              works alongside families in the home to support a broad range of
              needs and skill development.
            </label>
            <label>
              <input
                type="radio"
                name="program"
                id="radio-behavioural-support"
                className="radio"
                value="behavioural-support"
              />
              Behavioral/Developmental Support – Focused support in one key area
              of your child’s development to promote growth, confidence, and
              positive change.
            </label>
            <label>
              <input
                type="radio"
                name="program"
                id="radio-unsure"
                className="radio"
                value="unsure"
              />
              Unsure, I have questions
            </label>
            <br />
            <input
              required
              placeholder="Contact Email"
              type="email"
              className="email"
              value={email}
              onChange={changeEmail}
            />
            <br />
            <input
              required
              placeholder="Contact Phone"
              type="phone"
              className="phone"
              value={phone}
              onChange={changePhone}
            />
            <p>I prefer to hear back by:</p>
            <label>
              <input
                type="radio"
                name="contact-method"
                id="radio-phone"
                className="radio"
                value="phone"
              />
              Phone
            </label>
            <label>
              <input
                type="radio"
                name="contact-method"
                id="radio-email"
                className="radio"
                value="email"
              />
              Email
            </label>
            <button type="submit" onClick={() => setContact(true)}>
              Send
            </button>
          </form>
        </>
        <br />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

const ModalWrapper = ({ buttonLabel = "Contact" }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="modal-wrapper">
      <button
        className="open-button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {buttonLabel}
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <ContactModal
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalWrapper;
