import React from 'react';
import StyledDarkModeToggle from './DarkModeToggle.styled';

interface DarkModeToggleProps {
  onclick: () => void;
  themeMode: string;
}

const DarkModeToggle = ({ onclick, themeMode }: DarkModeToggleProps) => {
  return (
    <StyledDarkModeToggle onClick={onclick}>
      <button className={`toggle ${themeMode}`}></button>
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
