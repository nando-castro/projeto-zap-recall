import logo from "../../Assets/images/LogoZap.png";
import "./init.css";

export default function Init({ classe }) {
  return (
    <div className={classe}>
      <img src={logo} alt="Logo"/>
      <h1>ZapRecall</h1>
    </div>
  );
}
