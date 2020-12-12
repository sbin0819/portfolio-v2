import React from 'react';
import styled from 'styled-components';
import { font } from '../style/theme';
// 햄버거 메뉴 추가
// import Menu from '../components/common/Menu';

const HeaderContainer = styled.div`
  display: flex;
  padding: 0 4vw;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  font-size: ${font.default};
  .logo {
    font-size: 24px;
    cursor: pointer;
    :hover {
      color: pink;
    }
  }
  /* 햄버거 메뉴 변경 */
  .menus {
    span {
      margin: 0 18px;
      font-size: 18px;
      cursor: pointer;
      :hover {
        color: pink;
      }
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
