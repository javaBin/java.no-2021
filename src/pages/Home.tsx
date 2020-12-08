import React from 'react';
import {useTranslation} from 'react-i18next';
import EventTabBar from "../components/EventTabBar";

const Home = () => {
    const {t, i18n} = useTranslation();

    return (
        <div>
            <h1>{t('title')}</h1>
            <div>Hello</div>
            <div>
                <EventTabBar />
            </div>
        </div>
    );
};

export default Home;
