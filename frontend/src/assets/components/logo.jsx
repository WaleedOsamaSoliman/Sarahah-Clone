import "../css/logo.css";
import logo from "../../imgs/logo_nav.png";
import config from "../../config/settings.js";
export default function LOGO() {
  return (
    <div className="logo-container">
      <img src={logo} />
      <br />
      <h2>
        {config.public_info.ar_app_name} {config.public_info.en_app_name}
      </h2>
    </div>
  );
}
