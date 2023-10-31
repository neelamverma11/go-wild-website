import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainItem from './MainItem';
import CardItem from './CardItem';
import FAQPage from './FAQPage';
import MainItem1 from './MainItem1';

const defaultTheme = createTheme();

const MainPage = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <MainItem />
            <CardItem />
            <MainItem1 />
            <FAQPage />
        </ThemeProvider >
    );
}

export default MainPage;