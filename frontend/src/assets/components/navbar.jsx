import "../css/navbar.css";
import Logo from "../imgs/logo_nav.png";
export default function Nav() {
  return (
    <nav id="top-navbar" class={"shadowbox-b-light"}>
      <img src={Logo}></img>
    </nav>
  );
}
