import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 40vh;
  padding-left: 8vw;

  .title {
    margin-bottom: 8px;
    h1 {
      font-size: 55px;
      margin-bottom: 16px;
    }
    h2 {
      font-size: 36px;
    }
  }
  .logo {
    span {
      margin-right: 10px;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <div className='title'>
          <h1>Subin HA</h1>
          <h2>Frontend Web Developer</h2>
        </div>
        <div className='logo'>
          <span>git</span>
          <span>blog</span>
          <span>gmail</span>
        </div>
      </Container>
    </>
  );
};

export default Home;
