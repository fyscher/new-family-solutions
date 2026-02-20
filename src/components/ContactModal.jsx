import "../static/css/contact.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ContactModal = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [, setContact] = useState(false);

  const changeFirst = (e) => setFirstName(e.target.value);
  const changeLast = (e) => setLastName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
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
            <h2>Connect with us</h2>
            <h4 className="i-h4">
              Send us a message. We will contact you as soon as we can.
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
              placeholder="Last Name (optional)"
              type="text"
              className="last"
              value={lastName}
              onChange={changeLast}
            />
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
            <textarea
              required
              placeholder="Let us know what you want, and we will get back to you in the email provided above shortly!"
              className="inquiry"
            ></textarea>
            <br />
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

const ModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="modal-wrapper">
      <button
        className="open-button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Contact
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
