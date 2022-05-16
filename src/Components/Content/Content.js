import "./content.css";
import Init from "../Init/Init";

export default function Content({ entrar }) {
  function Button() {
    return <a onClick={() => entrar("")}>Iniciar recall!</a>;
  }

  return (
    <>
      <div className="home">
        <Init classe={"logo"} />
        <Button />
      </div>
    </>
  );
}