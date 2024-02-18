import React from 'react';
import StyledDarkModeToggle from "./DarkModeToggle.styled";

interface DarkModeToggleProps {
    onclick: () => void;
    themeMode: string
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ onclick, themeMode }) => {
    return (
        <StyledDarkModeToggle onClick={onclick}>
            <button className={`toggle ${themeMode}`}>

            </button>
        </StyledDarkModeToggle>
    );
};

export default DarkModeToggle;
