
import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./productlist/ProductList";
import Form from "./form/form";
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
        <Routes>
            <Route index element={<ProductList/>}/>
            <Route path={'/form'} element={<Form/>}/>
        </Routes>
{/*<Button onClick={onToggleButton}>does it work?</Button>*/}
        {/*<Button onClick={onClose}>Закрыть</Button>*/}
    </div>
  );
}

export default App;
