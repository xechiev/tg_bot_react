import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "../../hooks/useTelegram";

function App() {
  const { tg, onClose } = useTelegram();
  useEffect(() => {
    tg.ready(); // метод сообщает, что приложение полностью проинициализировалось.
  }, []);

  return (
    <div className="App">
      Working!
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
