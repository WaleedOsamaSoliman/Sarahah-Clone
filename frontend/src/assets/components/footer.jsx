import "../css/footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebook size={30} className={"icon"} />
        <FaXTwitter size={30} className={"icon"} />
        <FaInstagram size={30} className={"icon"} />
        <FaGithub size={30} className={"icon"} />
      </div>
      <div className="links">
        <a href="#">الشروط</a>
        <a href="#">الخصوصيه</a>
        <a href="#">اتصل بنا</a>
        <a href="#">المساعده</a>
      </div>
    </div>
  );
}
