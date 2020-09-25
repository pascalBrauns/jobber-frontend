import React from 'react';
import Theme from './Theme';
import { Provider } from 'react-redux';
import Store from 'Store';
import Container from './Container';
import Loader from './Loader';
import Style from './Style';

const App: React.FC = ({ children }) => (
  <Provider store={Store}>
    <Container>
      <Theme>
        <Loader>
          <Style/>
          {children}
        </Loader>
      </Theme>
    </Container>
  </Provider>
);

export default App;
