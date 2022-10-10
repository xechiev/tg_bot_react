import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready(); // метод сообщает, что приложение полностью проинициализировалось.
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
