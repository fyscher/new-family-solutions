import ModalWrapper from "../components/ContactModal.jsx";

const About = () => {
  return (
    <div className="about-blurb">
      <div className="a-text">
        <h3 className="a-header">You are not alone in this.</h3>
        <p className="a-p">
          Raising a child with a disability is one of the most profound — and
          sometimes exhausting — journeys a family can take. At New Family
          Solutions, we&apos;ve been walking alongside families like yours since
          2007.
        </p>
        <p className="a-p">
          We are not a one-size-fits-all service. We take time to understand
          your child as an individual: their strengths, their challenges, their
          way of experiencing the world. Our team is trained, compassionate,
          and genuinely invested in your family&apos;s wellbeing.
        </p>
        <ModalWrapper buttonLabel="Start a conversation" />
      </div>
    </div>
  );
};

export default About;
