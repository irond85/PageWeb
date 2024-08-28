import MainPageView from "./views/MainPageView";
import "./App.css";

function App() {
  return (
    <>
      <MainPageView />
      <div style={{ display: "none" }}>
        <a target="_blank" href="https://icons8.com/icon/16713/whatsapp">
          WhatsApp
        </a>{" "}
        icono de{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </>
  );
}

export default App;
