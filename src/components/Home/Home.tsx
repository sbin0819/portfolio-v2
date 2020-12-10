import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 90vh;
`;

const BodyContainer = styled.div`
  flex: 1;
  .title {
    margin-top: 36vh;
    margin-left: 4vw;
    h1 {
      font-size: 55px;
      margin-bottom: 16px;
    }
    h2 {
      font-size: 36px;
    }
    .logo {
      margin-top: 10px;
      span {
        margin-right: 10px;
      }
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  .box {
    margin-top: 22vh;
    border: 5px solid pink;
    height: 400px;
    width: 600px;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Home = () => {
  return (
    <Container>
      <BodyContainer>
        <div className='title'>
          <h1>Subin HA</h1>
          <h2>Frontend Web Developer</h2>
          <div className='logo'>
            <span>git</span>
            <span>blog</span>
            <span>gmail</span>
          </div>
        </div>
      </BodyContainer>
      <ImageContainer>
        <div className='box'>
          <h1>COOL SVG</h1>
        </div>
      </ImageContainer>
    </Container>
  );
};

export default Home;
