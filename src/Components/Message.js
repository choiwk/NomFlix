import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 30px;
  font-weight: 400;
`;

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
