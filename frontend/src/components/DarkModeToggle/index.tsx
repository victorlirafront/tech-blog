import React from 'react';
import StyledDarkModeToggle from './DarkModeToggle.styled';

interface DarkModeToggleProps {
  onclick: () => void;
  themeMode: string;
  className: string;
}

const DarkModeToggle = ({ onclick, themeMode, className }: DarkModeToggleProps) => {
  return (
    <StyledDarkModeToggle onClick={onclick} className={className}>
      <button className={`toggle ${themeMode}`}></button>
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
