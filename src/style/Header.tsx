import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { font } from '../style/theme';
import { MenuOutlined } from '@ant-design/icons';
import Navigator from './Navigator';
// 햄버거 메뉴 추가
// import Menu from '../components/common/Menu';

const HeaderContainer = styled.div`
  display: flex;
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
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible((state) => !state);
  };
  return (
    <>
      <HeaderContainer>
        <div className='logo'>
          <Link to='/'>SUBIN</Link>
        </div>
        <div className='menus'>
          {/* <span>ABOUT</span>
          <span>PORTFOILO</span>
          <span>RESUME</span>
          <span>BLOG</span>
          <span>CONTACT</span> */}
          <MenuOutlined style={{ fontSize: '28px' }} onClick={onClick} />
        </div>
      </HeaderContainer>
      <Navigator visible={visible} onClick={onClick} />
    </>
  );
};

export default Header;
