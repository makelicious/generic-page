import React from 'react';
import styled from 'styled-components';

import Contact from './Components/Contact';
import Services from './Components/Services';
import TopBar from './Components/TopBar';
import heroImage from './images/space.jpg';

const Wrapper = styled.div`
  width: 100%;
`;

const HeroImage = styled.div`
  background-image: linear-gradient(rgba(33, 33, 33, 0.6), rgba(33, 33, 33, 0.2)), url(${heroImage});
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: right;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8%;
  margin: 0 1em;
`;

const Subtitle = styled.h2`
  color: #fafafa;
  font-family: 'Oswald', sans-serif;
`;


function MainPage() {
  return (
    <Wrapper>
      <HeroImage>
        <TopBar />
        <TitleWrapper>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle>
        </TitleWrapper>
      </HeroImage>
      <Services />
      <Contact />
    </Wrapper>
  );
}

export default MainPage;
