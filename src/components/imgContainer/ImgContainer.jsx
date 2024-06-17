import './imgContainer.css';

export default function ImgContainer(){
    return (
        <section>
            <img className='img_container' src={`${import.meta.env.VITE_PUBLIC_URL}illustration-sign-up-desktop.svg`} alt="Icon List" />
        </section>
    );
}