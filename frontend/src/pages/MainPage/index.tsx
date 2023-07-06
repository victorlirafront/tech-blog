import { useState, useEffect, ReactNode } from 'react';
import StyledMainPage from './MainPage.styled';

interface Iprops {
    children: ReactNode
}

const MainPage = function (props: Iprops) {
    return (
        <StyledMainPage>
            {props.children}
        </StyledMainPage>
    );
};

export default MainPage;
