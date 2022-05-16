import "./content.css";
import Init from "../Init/Init";

export default function Content({ entrar }) {
  function Button() {
    return <a onClick={() => entrar("cards")}>Iniciar recall!</a>;
  }

  function Input() {
    return <input className="input" type="number" placeholder="Digite sua meta de zaps..."></input>
  }

  return (
    <>
      <div className="home">
        <Init classe={"logo"} />
        <Input />
        <Button />
      </div>
    </>
  );
}