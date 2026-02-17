import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ContactModal = ({ onClose }) => {
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
        Hello!
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
