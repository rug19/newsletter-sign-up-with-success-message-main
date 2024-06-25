import "./textContainer.css";
export default function TextContainer() {
  return (
    <section className="text_container">
      <h1 className="text_title">Stay updated!</h1>
      <p className="title_paragraph">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="text_paragrapgh">
        <li className="list_container">
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}icon-list.svg`}
            alt="Icon List"
          />
          <p>Product discovery and building what matters</p>
        </li>
        <li className="list_container">
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}icon-list.svg`}
            alt="Icon List"
          />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li className="list_container">
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}icon-list.svg`}
            alt="Icon List"
          />
          <p>And much more!</p>
        </li>
      </ul>
    </section>
  );
}
