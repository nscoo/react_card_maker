import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'
const Maker = ({ authService }) => {
    const [cards, setCards] = useState({
        '1' : {
            id: '1',
            name: 'SangCheol1111',
            company: 'SungeunENG',
            theme: 'dark',
            title: 'Developer',
            email: 'nscoo@naver.com',
            message: 'holy moly',
            fileName: 'Roh',
            fileURL: 'Roh.png',
        },
        '2' :     {
            id: '2',
            name: 'SangCheol2',
            company: 'SungeunENG',
            theme: 'light',
            title: 'Developer',
            email: 'nscoo@naver.com',
            message: 'holy moly',
            fileName: 'Roh',
            fileURL: null,
        },
        '3' :{
            id: '3',
            name: 'SangCheol3',
            company: 'SungeunENG',
            theme: 'colorful',
            title: 'Developer',
            email: 'nscoo@naver.com',
            message: 'holy moly',
            fileName: 'Roh',
            fileURL: null,
        },
    });
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };


    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/');
            }
        });
    })
    const addCard = (card) =>{
        const updated = [...cards, card];
        setCards(updated)
    }
    const createOrUpdateCard = (card) =>{
        setCards(cards =>{
            const updated = {...cards}
            updated[card.id] = card;
            return updated; 
        })
    }
    const deleteCard = (card) =>{
        setCards(cards =>{
            const updated = {...cards}
            delete updated[card.id];
            return updated; 
        })
    } 
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrUpdateCard} updateCard ={createOrUpdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}


export default Maker;