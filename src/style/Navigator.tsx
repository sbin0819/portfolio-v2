/* eslint-disable import/no-anonymous-default-export */ //.eslintrc rule
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  z-index: 100;
`;

export const NavigatorBody = styled.div`
  .modal-header {
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
    font-size: 40px;
    color: white;
    div {
      cursor: pointer;
    }
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15%;
    a {
      display: inline-flex;
      text-transform: uppercase;
      justify-content: center;
      align-items: center;
      color: inherit;
      margin: 20px 20px;
      width: 45vw;
      padding: 4px 16px;
      min-width: 200px;
      height: 50px;
      font-size: 35px;
      color: pink;
      :hover {
        border: 1px solid pink;
        cursor: pointer;
      }
    }
  }
`;

interface HeaderProps {
  visible: boolean;
  onClick: () => void;
}

export default ({ visible, onClick }: HeaderProps) => {
  return (
    <>
      {visible && (
        <ModalWrapper>
          <NavigatorBody>
            <div className='modal-header'>
              <div onClick={onClick}>X</div>
            </div>
            <div className='menu'>
              <div onClick={onClick}>
                <Link to='/about'>ABOUT</Link>
              </div>
              <div onClick={onClick}>
                <Link to='/'>PORTFOILO</Link>
              </div>
              <div onClick={onClick}>
                <Link to='/'>RESUME</Link>
              </div>
              <div onClick={onClick}>
                <Link to='/'>BLOG</Link>
              </div>
              <div onClick={onClick}>
                <Link to='/'>Contact</Link>
              </div>
            </div>
          </NavigatorBody>
        </ModalWrapper>
      )}
    </>
  );
};
