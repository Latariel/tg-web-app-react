
import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header/header";
// window.Telegram.WebApp.
// const tg = window.Telegram.WebApp;


function App() {
    const {onToggleButton, tg} = useTelegram()
    useEffect(() => {
    tg.ready();
                }, [])

    // const onClose = () => {
    // tg.close()
    // }

  return (
    <div className="App">
        <Header/>
<button onClick={onToggleButton}>does it work?</button>
        {/*<button onClick={onClose}>Закрыть</button>*/}
    </div>
  );
}

export default App;
