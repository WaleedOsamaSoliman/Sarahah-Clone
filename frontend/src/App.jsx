import LoginPage from "./assets/pages/login.jsx";
import Footer from "./assets/components/footer.jsx";
import Settings from "./config/settings.js";
import Nav from "./assets/components/navbar.jsx";

const pageContainerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
  overflow: "auto;",
};
function App() {
  return (
    <>
      <Nav />

      <div className={"page-container"} style={pageContainerStyle}>
        {/* <LoginPage /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
