// src/components/Features/Features.tsx
import React from 'react';
import { Row, Col, Card } from 'antd';
import { FeatureContainer, FeatureTitle } from './Features.Styles';

const Features: React.FC = () => (
  <FeatureContainer>
    <FeatureTitle>O que o RPG World Oferece</FeatureTitle>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Criação de Personagem" bordered={false}>
          Customize seu personagem com opções de classes e raças únicas.
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Missões e Aventuras" bordered={false}>
          Participe de missões que desafiam suas habilidades e recompensam com itens raros.
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Progressão de Nível" bordered={false}>
          Suba de nível e desbloqueie novas habilidades conforme evolui.
        </Card>
      </Col>
    </Row>
  </FeatureContainer>
);

export default Features;
