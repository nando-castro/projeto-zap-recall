import { useState } from "react";
import Home from "./Components/Home/Home";
import Quests from "./Components/Quests/Quests";

export default function App(){
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible ? <Home setVisible={setVisible} /> : <Quests />}
        </>
    );
}