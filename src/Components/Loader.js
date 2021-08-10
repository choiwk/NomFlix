import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 15%;
  height: 100vh;
  width: 100vw;
  font-size: 100px;
  justify-content: center;
`;

const Loader = () => (
  <Container>
    <span role="img" aria-label="Loading">
      Loading...
    </span>
  </Container>
);

export default Loader;
