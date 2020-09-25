import React from 'react';
import Container from './Container';
import Title from './Title';
import CloseButton from './CloseButton';

export type Props = {
  onClose?: () => void;
}

const Header: React.FC<Props> = ({ onClose }) => (
  <Container>
    <Title>Job</Title>
    <CloseButton onClose={onClose || (() => {})}/>
  </Container>
);

export default Header;
