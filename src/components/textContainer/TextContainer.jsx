import "./textContainer.css";
import InputContainer from "../inputContainer/InputContainer";
import ButtonContainer from "../buttonContainer/ButtonContainer";

export default function TextContainer() {
  return (
    <section className="text_container">
      <h1 className="text_title">Stay updated!</h1>
      <p className="title_paragraph">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="text_paragrapgh">
        <li className="list_container">
          <img src="/src/assets/images/icon-list.svg" alt="" />
          <p>Product discovery and building what matters</p>
        </li>
        <li className="list_container">
          <img src="/src/assets/images/icon-list.svg" alt="" />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li className="list_container">
          <img src="/src/assets/images/icon-list.svg" alt="" />
          <p>And much more!</p>
        </li>
      </ul>
      <div>
        <InputContainer></InputContainer>
      </div>
      <div>
        <ButtonContainer></ButtonContainer>
      </div>
    </section>
  );
}
