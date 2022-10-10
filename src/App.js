import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready(); // метод сообщает, что приложение полностью проинициализировалось.
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      Working!
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
