import './imgContainer.css';

export default function ImgContainer(){
    return (
        <section className="img_container">
            <img  className="img_main" src={`${import.meta.env.VITE_PUBLIC_URL}illustration-sign-up-desktop.svg`} alt="Icon List" />
        </section>
    );
}