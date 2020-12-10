import React from 'react';
import styled from 'styled-components';
import { font } from '../style/theme';

const HeaderContainer = styled.div`
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 60px);
  height: 54px;
  font-size: ${font.default};
  .logo {
    font-size: 24px;
  }
  .menus {
    span {
      margin: 0 18px;
      font-size: 18px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className='logo'>SUBIN</div>
      <div className='menus'>
        <span>ABOUT</span>
        <span>PORTFOILO</span>
        <span>RESUME</span>
        <span>BLOG</span>
        <span>CONTACT</span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
