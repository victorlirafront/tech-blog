import { ReactNode } from 'react';
import StyledMainPage from './MainPage.styled';

interface Iprops {
  children: ReactNode;
  className: string;
}

const MainPage = function (props: Iprops) {
  return (
    <StyledMainPage className={props.className}>
      {props.children}
    </StyledMainPage>
  );
};

export default MainPage;
