import React, { useEffect } from 'react';
import useActions from 'Store/useActions';
import { useSelector } from 'Type/Redux';
import Container from './Container';
import Splash from './Splash';

const App: React.FC = ({ children }) => {
  const initialized = useSelector(state => state.App.initialized);
  const { initializeApp } = useActions();
  useEffect(
    () => {
      initializeApp();
    },
    []
  );

  if (initialized) {
    return (
      <>
        {children}
      </>
    );
  }
  else {
    return (
      <Container>
        <Splash/>
      </Container>
    );
  }
}

export default App;
