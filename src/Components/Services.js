import React from 'react';
import styled from 'styled-components';

import astronaut from '../images/astronaut.jpg';
import earth from '../images/earth.jpg';
import egypt from '../images/egypt.jpg';
import moon from '../images/moon.jpg';
import rocket from '../images/rocket.jpg';
import space from '../images/space.jpg';


const items = [
  {
  image: astronaut,
  text: 'An astronaut',
  },
  {
    image: earth,
    text: 'Earth',
  },
  {
    image: egypt,
    text: 'Space from egypt',
  },
  {
    image: moon,
    text: 'Moon',
  },
  {
    image: rocket,
    text: 'Rocket',
  },
  {
    image: space,
    text: 'Space',
  },

]


const Wrap = styled.div`
  margin-top: 3em;
  justify-content: space-between;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
`;

const Title = styled.h1`
  color: #171717;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  margin-top: 2em;
  margin-bottom: 0;
`;

const ServiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;
const ServiceCard = styled.div`
  width: 400px;
  min-width: 300px;
  height: 400px;
  margin: 0 1em;
  @media only screen and (max-width: 600px) {
    width: 300px;
    margin: 0rem;
  }
`;
const ServiceImage = styled.div`
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => console.log('props', props) || props.image});
`;


const ServiceTextWrap = styled.div`
  background-color: #171717;
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const ServiceText = styled.span`
  color: #fafafa;
  font-size: 1.5em;
  @media only screen and (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const Content = styled.div`
  margin-bottom: 2em;
`;

const ContentText = styled.p`
  font-size: 1.2em;
  color: #171717;
  margin: 1em 10em 0 10em;

  @media only screen and (max-width: 600px) {
    margin-top: 2rem;
    max-width: 300px;
  }
`;

class Services extends React.Component {
  render() {
    return (
      <Wrap>
        <Title>Lorem Ipsum</Title>
        <Content>
          <ContentText>
            {' '}
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </ContentText>
        </Content>
        <ServiceWrapper>
          {items.map((item) => (
          <ServiceCard>
            <ServiceImage image={item.image}/>
            <ServiceTextWrap>
              <ServiceText>{item.text}</ServiceText>
            </ServiceTextWrap>
          </ServiceCard>

          ))}
        </ServiceWrapper>
      </Wrap>
    );
  }
}
export default Services;
