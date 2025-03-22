import { Button, ButtonGroup } from "rsuite";
import LOGO from "../components/logo";
import Footer from "../components/footer";

const buttonGroupStyle = {
  width: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "10px",
  gap: 10,
};
const buttonStyle = {
  width: "100%",
  borderRadius: 5,
};
export default function Login() {
  return (
    <>
      <div className="login-container" style={{ backgroundColor: "white" }}>
        <LOGO />
        <ButtonGroup style={buttonGroupStyle}>
          <Button appearance={"primary"} style={buttonStyle}>
            تسجيل الدخول
          </Button>
          <Button appearance={"ghost"} style={buttonStyle}>
            {" "}
            انشــاء حســاب
          </Button>
        </ButtonGroup>
      </div>
      <Footer />
    </>
  );
}
