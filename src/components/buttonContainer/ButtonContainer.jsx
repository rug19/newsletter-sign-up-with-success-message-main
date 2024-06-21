import './buttonContainer.css';
import PropTypes from 'prop-types';

export default function ButtonContainer({handleSubmit}) {
  return (
    <section>
      <button onClick={handleSubmit} className='form_button' id="submit-btn">Subscribe to monthly newsletter</button>
    </section>
  );
}


//Especifica o tipo de props que esta utilizando

ButtonContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};