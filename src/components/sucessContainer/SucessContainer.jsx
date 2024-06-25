import PropTypes from "prop-types";
import "./sucessContainer.css";
export default function SucessContainer({ onNewSubmission }) {
  return (
    <div className="success-container">
      <div>
        <img
          className="success-img"
      src={`${import.meta.env.VITE_PUBLIC_URL}icon-success.svg`}
          alt="icon-success"
        />
      </div>
      <h1 className="success-title">Thanks for subscribing!</h1>
      <p className="success-text">
        A confirmation email has been sent to{" "}
        <span className="success-span">ash@loremcompany.com.</span>
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button id="myButton" className="success-btn" onClick={onNewSubmission}>
        Dismiss message
      </button>
    </div>
  );
}

SucessContainer.propTypes = {
  onNewSubmission: PropTypes.func.isRequired,
};
