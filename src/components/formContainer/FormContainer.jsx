import { useState } from "react";
import "./formContainer.css";
import ButtonContainer from "../buttonContainer/ButtonContainer";

export default function FormContainer() {

  //TODO: Validar o email se passar pelo expressao regular regex
  //TODO: Mensagem de erro caso não passe
  const [email, setEmail] = useState();
  // const [error, setError] = useState();
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //Lidando com o evento do submit para nao enviar o forumlario imediato
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)

  // const emailValidate = (e) = {
    
    
  // }



  }

  return (
    <section>
      <p className="input_paragraph">Email address</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@company.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <ButtonContainer validandoEmail={handleSubmit} />
    </section>
  );
}
