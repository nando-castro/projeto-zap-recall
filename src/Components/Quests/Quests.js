import React from "react";
import data from "../../data/index";
import logo from "../../assets/img/logo-pequeno.png"
import FlashCard from "../Flashcard/Flashcard";
import Icon from "../shared/Icon"

let questionsData = data.map(value => {
    return {
        ...value,
        tap: false,
        status: 'not_answer'
    }
})

questionsData = questionsData.sort(() => Math.random() - 0.5);


export default function Quests() {

    const [questions, setQuestions] = React.useState(questionsData);
    const [answer, setAnswer] = React.useState(0);
    const [queueAnswer, setQueueAnswer] = React.useState([]);

    function resultAnswer (){

        const result = queueAnswer.find(value => value === 'error');

        return(
            <>
                {result ? (<p>😥</p>) : (<p>🥳</p>)}
            </>
        );
    }

    function tapCard(cardIndex) {
        let newQuestions = questions.map((value, index) => {
            if (index === cardIndex) {
                return {
                    ...value,
                    tap: true,
                }
            } else {
                return {
                    ...value,
                    tap: false,
                }
            }
        })

        setQuestions([...newQuestions]);
    }


    function Zap(cardIndex, status) {

        let newQuestions = questions.map((value, index) => {
            if (index === cardIndex) {
                return {
                    ...value,
                    tap: false,
                    status: status,
                }
            } else {
                return {
                    ...value,
                    tap: false,
                }
            }
        })

        setQuestions([...newQuestions]);
        setAnswer(answer + 1);
        setQueueAnswer([...queueAnswer, status]);
    }



    return (
        <div className="deck">
            <div className="header">
                <img src={logo} alt="Zap Recall" />
                <h1>Zap Recall</h1>
            </div>
            <div className="main">
                {questions.map((value, index) =>
                    <FlashCard
                        key={index}
                        title={`Pergunta ${index + 1}`}
                        tap={value.tap}
                        index={index}
                        tapCard={tapCard}
                        question={value.frente}
                        answer={value.verso}
                        status={value.status}
                        zap={Zap}
                    />)}
            </div>
            <div className="footer">
                {queueAnswer.length === questions.length ? (
                    resultAnswer() ) : (null)
                }
                {queueAnswer.map(value => {
                    if(value !== 'not_answer') {
                        return <Icon status={value} />
                    }
                })}
                <p>{answer}/{questions.length} CONCLUÍDOS</p>
                
            </div>
        </div>
    );
}