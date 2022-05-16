import "./footer.css";
import React from "react";
import imgParty from "../../Assets/images/party.png";
import imgSad from "../../Assets/images/sad.png";

export default function Footer(props) {
  const feedbacks = {
    titleParty: "Parabens!",
    titleSad: "Putz...",
    imgParty: imgParty,
    imgSad: imgSad,
    textParty: "Você não esqueceu de nenhum flashcard!",
    textSad: "Ainda faltam alguns... Mas não desanime!"
  };

  function Result(props) {
    return (
      <div className="resultado">
        <div>
          <img src={props.img} alt="" />
          <p>{props.titulo}</p>
        </div>
        <p>{props.texto}</p>
      </div>
    );
  }

  function Cont() {
    return (
      <div>
        {props.qtdRespondidas}/{props.perguntas.length} concluídos
      </div>
    );
  }

  return (
    <div className="footer">
      {props.qtd === props.perguntas.length ? (
        <Result
          img={feedbacks.imgParty}
          titulo={feedbacks.titleParty}
          texto={feedbacks.textParty}
        />
      ) : (
        ""
      )}
      {props.qtdRespondidas === props.perguntas.length &&
      props.qtd !== props.perguntas.length ? (
        <Result
          img={feedbacks.imgSad}
          titulo={feedbacks.titleSad}
          texto={feedbacks.textSad}
        />
      ) : (
        ""
      )}
      <Cont />
      {props.icones.map((name) => (
        <ion-icon name={name}></ion-icon>
      ))}
    </div>
  );
}
