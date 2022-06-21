import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'
const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
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
        {
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
        {
            id: '3',
            name: 'SangCheol3',
            company: 'SungeunENG',
            theme: 'colorful',
            title: 'Developer',
            email: 'nscoo@naver.com',
            message: 'holy moly',
            fileName: 'Roh',
            fileURL: null,
        }
    ])
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
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}


export default Maker;