import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    // const {user, onClose} = useTelegram()


    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close()
    }
    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть комара</button>
            <span className={'username'}>
            {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;