import Logo from "./../../assets/img/LogoZap.png"
import "./style.css"

function Home({ setVisible }) {

    return (
        <div className="home">
            <img src={Logo} alt="Zap Recall!" />
            <h1>zapRecall</h1>
            <button onClick={() => setVisible(false)}>Iniciar Recall!</button>
        </div>
    );
}

export default Home;