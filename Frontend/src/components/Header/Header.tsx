import React from 'react';
import { Menu } from 'antd';
import { HeaderContainer, Logo } from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>RPG World</Logo>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Sobre o Jogo</Menu.Item>
        <Menu.Item key="2">Personagens</Menu.Item>
        <Menu.Item key="3">Missões</Menu.Item>
        <Menu.Item key="4">Login</Menu.Item>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
