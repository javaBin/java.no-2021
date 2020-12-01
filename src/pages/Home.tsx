import React from 'react';
import {useTranslation} from 'react-i18next';
import EventTabbar from "../components/EventTabbar"

const Home = () => {
    const {t, i18n} = useTranslation();

    return (
        <div>
            <h1>{t('title')}</h1>
            <div>Hello</div>
            <div>
                <EventTabbar />
            </div>
        </div>
    );
};

export default Home;
