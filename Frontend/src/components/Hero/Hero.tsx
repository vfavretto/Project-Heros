import React from 'react';
import { Button } from 'antd';
import { HeroContainer, HeroTitle, HeroSubtitle } from './Hero.Styles';

const Hero: React.FC = () => (
  <HeroContainer>
    <HeroTitle>Entre em um Mundo de Aventuras</HeroTitle>
    <HeroSubtitle>Crie seu personagem, explore o mundo e embarque em missões épicas.</HeroSubtitle>
    <Button type="primary" size="large">Comece Agora</Button>
  </HeroContainer>
);

export default Hero;