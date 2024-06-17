import './inputContainer.css'

export default function InputContainer() {
  return (
    <section>
      <p className='input_paragraph'>Email address</p>
      <form action="">
        <input  id="email" type="text" placeholder="email@company.com" />
      </form>
    </section>
  );
}


