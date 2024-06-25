import { useState } from "react";
import TextContainer from "../textContainer/TextContainer";
import ImgContainer from "../imgContainer/ImgContainer";
import "./mainContainer.css";
import FormContainer from "../formContainer/FormContainer";
import SucessContainer from "../sucessContainer/SucessContainer";

export default function MainContainer() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = () => {
    setEmailSubmitted(true);
  };

  const handleNewSubmission = () => {
    setEmailSubmitted(false);
  };
  return (
    <section>
      {!emailSubmitted ? (
        <div className="main_container">
          <div>
            <TextContainer />
            <FormContainer onSubmit={handleEmailSubmit} />
          </div>
          <div className="img_container-main">
            <ImgContainer />
          </div>
        </div>
      ) : (
        <SucessContainer onNewSubmission={handleNewSubmission} />
      )}
    </section>
  );
}
