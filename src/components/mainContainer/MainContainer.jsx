import TextContainer from "../textContainer/TextContainer";
import ImgContainer from "../imgContainer/ImgContainer";
import "./mainContainer.css";

export default function MainContainer() {
  return (
    <main className="main_container">
      <TextContainer></TextContainer>
      <div className="img_container-main">
        <ImgContainer></ImgContainer>
      </div>
    </main>
  );
}
