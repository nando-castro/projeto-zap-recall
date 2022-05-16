import "./content.css";
import Init from "../Init/Init";

export default function Content({ entrar }) {
  function Button() {
    return <a onClick={() => entrar("cards")}>Iniciar recall!</a>;
  }

  return (
    <>
      <div className="home">
        <Init classe={"logo1"} />
        <Button />
      </div>
    </>
  );
}