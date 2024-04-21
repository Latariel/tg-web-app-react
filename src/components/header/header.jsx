import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import Button from '../Button/Button';
import './header.css'


const Header = () => {
    const {user, onClose} = useTelegram()


    // const tg = window.Telegram.WebApp;

    // const onClose = () => {
    //     tg.close()
    // }
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть комара</Button>
            <span className={'username'}>
            {user?.username}
            </span>
        </div>
    );
};

export default Header;