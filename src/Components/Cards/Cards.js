import React from "react";
import "./cards.css";
import Init from "../Init/Init";
import Flashcard from "../Cards/Flashcard";
import Footer from "../Footer/Footer";

export default function Cards() {
  const perguntasEmOrdem = [
    {
      question: "",
      response: ""
    },
    {
      question: "",
      response: ""
    },
    {
      question: "",
      response: ""
    },
    {
      question: "",
      response: ""
    }
  ];

  const perguntas = [];
  let indice;
  let aux = [];
  let NUMBER_MAGIC = 3;

  for (let i = 0; i < perguntasEmOrdem.length + NUMBER_MAGIC; i++) {
    indice = parseInt(Math.random() * perguntasEmOrdem.length);
    aux = perguntasEmOrdem.splice(indice, 1);
    console.log(perguntasEmOrdem.length);
    perguntas.push(aux[0]);
  }

  const [respondidas, setRespondidas] = React.useState(0);
  const [icones, setIcones] = React.useState([]);
  const [qtdLembrou, setQtdLembrou] = React.useState(0);

  return (
    <>
      <div className="cards">
        <Init classe={"logo2"} />
        <div className="flashcards">
          {perguntas.map((p, index) => (
            <Flashcard
              dadosTexto={p}
              indexPergunta={index + 1}
              contaRespostas={setRespondidas}
              qtdRespostas={respondidas}
              mudarIcones={setIcones}
              iconesAtuais={icones}
              lembrouQtd={qtdLembrou}
              setLembrouQtd={setQtdLembrou}
            />
          ))}
        </div>
        <Footer
          qtdRespondidas={respondidas}
          icones={icones}
          perguntas={perguntas}
          qtd={qtdLembrou}
        />
      </div>
    </>
  );
}
