import React, {useCallback, useEffect, useState} from 'react';
import './form.css';
import {useTelegram} from "../hooks/useTelegram";


const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


        return (
            <div className={'form'}>
                FORK

                <h3>введите данные</h3>
                <input
                    className={'input'}
                    type={'text'}
                    placeholder={'ваш любимый покемон'}
                    value={country}
                    onChange={onChangeCountry}
                />
                <input
                    className={'input'}
                    type={'text'}
                    placeholder={'сколько?'}
                    value={street}
                    onChange={onChangeStreet}
                />

                <select
                    className={'select'}
                    value={subject}
                    onChange={onChangeSubject}
                >
                    <option value={'physical'}>я пчеловод</option>
                    <option value={'legal'}>Я БЕЛАЗ</option>
                </select>
            </div>
        );

}

export default Form;



