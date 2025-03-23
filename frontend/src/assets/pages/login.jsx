import { Button, ButtonGroup } from "rsuite";
import LOGO from "../components/logo";

const buttonGroupStyle = {
  width: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "10px",
  gap: 10,
  marginTop: 100,
};
const buttonStyle = {
  width: "100%",
  borderRadius: 5,
};
export default function Login() {
  return (
    <>
      <div className="login-container">
        <LOGO />
        <ButtonGroup style={buttonGroupStyle}>
          <Button appearance={"primary"} style={buttonStyle}>
            تسجيل الدخول
          </Button>
          <Button color={"violet"} appearance={"ghost"} style={buttonStyle}>
            {" "}
            انشــاء حســاب
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
