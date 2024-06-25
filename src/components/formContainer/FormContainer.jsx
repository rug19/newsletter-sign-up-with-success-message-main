import { useState } from "react";
import "./formContainer.css";
import ButtonContainer from "../buttonContainer/ButtonContainer";
import PropTypes from "prop-types";

export default function FormContainer({ onSubmit }) {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //Validando o email e prevenindo o comportamento padrao do submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || !emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      onSubmit();
    }
  };

  return (
    <section>
      <div className="paragraph_container">
        <p className="input_paragraph">Email address</p>
        {emailError && (
          <p
            id="error-message"
            className="error-message"
            style={{ display: "block" }}
          >
            Valid email required
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@company.com"
          onChange={(e) => setEmail(e.target.value)}
          className={emailError ? " error" : ""}
        />
        <ButtonContainer FormContainer={handleSubmit} />
      </form>
    </section>
  );
}

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};