
import './buttonContainer.css';
import PropTypes from 'prop-types';

export default function ButtonContainer({FormContainer}) {
  return (
    <section>
      <button type='submit' onClick={FormContainer} className='form_button' id="submit-btn">Subscribe to monthly newsletter</button>
    </section>
  );
}


//Especifica o tipo de props que esta utilizando
ButtonContainer.propTypes = {
  FormContainer: PropTypes.func.isRequired,
};