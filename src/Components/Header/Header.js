import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

function Header({ location: { pathname } }) {
  return (
    <HeaderTag>
      <List>
        <Item current={pathname === '/'}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname === '/tv'}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === '/search'}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </HeaderTag>
  );
}

const HeaderTag = styled.header`
  color: white;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  text-decoration: none;
`;

const Item = styled.li`
  width: 65px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom 0.3s ease-in-out;
  /* &:not(:last-child) {
    margin-right: 10px;
  } */
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(Header); // Header가 withRouter() 이라는 컴포넌트를 감싼 형태이기 때문에 props를 가질 수 있다.
