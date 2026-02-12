import "../static/css/contact.css";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [, setContact] = useState(false);

  const changeFirst = (e) => setFirstName(e.target.value);
  const changeLast = (e) => setLastName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);

  return (
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
  );
};
export default Contact;
