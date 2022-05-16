import React from "react";
import vira from "../../Assets/images/setinha.png";

export default function Flashcard(props) {
  const [telaFlash, setTelaFlash] = React.useState("escondido");
  const [telaResposta, setTelaResposta] = React.useState(false);
  const [resposta, setResposta] = React.useState("flashcard");
  const [icone, setIcone] = React.useState("play-outline");
  const [texto, setTexto] = React.useState(props.dadosTexto.question);

  function respondido(valorResposta, valorIcone) {
    setTelaFlash("respondido");
    setResposta(valorResposta);
    setIcone(valorIcone);
    props.mudarIcones([...props.iconesAtuais, valorIcone]);
    props.contaRespostas(props.qtdRespostas + 1);

    if (valorResposta === "bom" || valorResposta === "medio") {
      props.setLembrouQtd(props.lembrouQtd + 1);
    }
  }

  function Answer() {
    function Options() {
      return (
        <div className="options">
          <p
            onClick={() => respondido("wrong", "close-circle-sharp")}
            className="level-wrong"
          >
            Não lembrei
          </p>
          <p
            onClick={() => respondido("almost", "help-circle-sharp")}
            className="level-almost"
          >
            Quase não lembrei
          </p>
          <p
            onClick={() => respondido("correct", "checkmark-circle-sharp")}
            className="level-correct"
          >
            Zap!
          </p>
        </div>
      );
    }

    return <Options />;
  }

  function Hidden() {
    return (
      <div className={resposta} onClick={() => setTelaFlash("pergunta")}>
        <p>Pergunta {props.indexPergunta}</p>
        {}
        <ion-icon name={icone}></ion-icon>
      </div>
    );
  }
  function Quest() {
    function SeeAnswer() {
      setTexto(props.dadosTexto.response);
      setTelaResposta(true);
    }
    return (
      <div className="pergunta">
        <p>{texto}</p>
        {telaResposta ? (
          <Answer />
        ) : (
          <img
            className="seta-mostrar-opcoes"
            onClick={() => SeeAnswer()}
            src={vira}
            alt=""
          />
        )}
      </div>
    );
  }

  return (
    <>
      {telaFlash === "escondido" ? <Hidden /> : ""}
      {telaFlash === "respondido" ? <Hidden /> : ""}
      {telaFlash === "pergunta" &&
      (resposta === "wrong" || resposta === "almost" || resposta === "correct") ? (
        <Hidden />
      ) : (
        ""
      )}
      {telaFlash === "pergunta" && resposta === "flashcard" ? <Quest /> : ""}
    </>
  );
}
