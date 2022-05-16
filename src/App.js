import React from "react";
import "../src/Assets/css/reset.css";
import "../src/Assets/css/style.css";
import Content from "./Components/Content/Content";
import Cards from "./Components/Cards/Cards";

export default function App() {
  const [tela, setTela] = React.useState("home");

  return (
    <>
      {tela === "home" ? <Content entrar={setTela} /> : ""}
      {tela === "cards" ? <Cards /> : ""}
    </>
  );
}
