import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  box-sizing: border-box;
  margin-top: 6em;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #454545;
  border-top: 4em #cdcdcd solid;
`;

const FormWrapper = styled.div`
  margin-top: 3em;
  width: 100%;
  margin: 10%;
  @media only screen and (max-width: 800px) {
    margin: 10% 5%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  color: #171717;
  margin-bottom: 2em;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const DoubleRow = styled(Row)`
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #fafafa;
  text-transform: uppercase;
  margin-bottom: 2em;
  margin-top: 2em;
  font-family: 'Oswald', sans-serif;
`;

const InputField = styled.input`
  background-color: #fefefefe;
  height: 2.5em;
  padding: 0 0em;
  margin-right: 0.75em;
  font-size: 1em;
  line-height: 1;
  border: none;
  width: 100%;
  text-indent: 10px;
  @media only screen and (max-width: 800px) {
    margin-top: 0.75em;
  }
`;

const PhoneField = styled(InputField)`
  margin-right: 0;
  @media only screen and (max-width: 800px) {
    /* margin-top: 0.75em; */
  }
`;
const EmailField = styled(InputField)`
  margin-right: 0;
  margin-top: 0.75em;
  @media only screen and (max-width: 800px) {
  }
`;
const Textarea = styled.textarea`
  font-size: 1em;

  background-color: #fefefe;
  width: 100%;
  height: 6em;

  margin-top: 0.75em;
  text-indent: 10px;
  padding-top: 0.75em;
`;

const Button = styled.button`
  margin-top: 0.75em;
  border: none;
  text-decoration: none;
  background-color: #171717;

  color: #fafafa;
  width: 25%;
  height: 3em;
  font-size: 1em;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

function Contact() {
  return (
    <Wrap>
      <FormWrapper>
        <Title>Contact us</Title>
        <Form>
          <DoubleRow>
            <InputField placeholder="Name" />
            <PhoneField placeholder="Phone" />
          </DoubleRow>
          <Row>
            <EmailField placeholder="Email" />
          </Row>
          <Row>
            <Textarea placeholder="Message..." />
          </Row>
          <Row>
            <Button>Send</Button>
          </Row>
        </Form>
      </FormWrapper>
    </Wrap>
  );
}

export default Contact;
