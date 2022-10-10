import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const { tg, onClose } = useTelegram();
  useEffect(() => {
    tg.ready(); // метод сообщает, что приложение полностью проинициализировалось.
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
