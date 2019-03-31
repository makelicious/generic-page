import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70px;
  transition: transform 0.2s;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ContactInfo = styled.div`
  display: flex;
  font-size: 0.9em;
  justify-content: space-between;
  @media (max-width: 640px) {
    margin-top: 10px;
    flex-direction: column;
    justify-content: none;
    align-items: flex-end;
  }
`;

const ContactItem = styled.span`
  font-size: 1.25em;
  padding-right: 1.25em;
  color: #fafafa;
`;

function TopBar() {
  return (
    <Header>
      <ContactInfoWrapper>
        <ContactInfo>
          <ContactItem>Earth,</ContactItem>
          <ContactItem>Solar System,</ContactItem>
          <ContactItem>Milky Way</ContactItem>
        </ContactInfo>
      </ContactInfoWrapper>
    </Header>
  );
}

export default TopBar;
