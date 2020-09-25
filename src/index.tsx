import React from 'react';
import { render } from 'react-dom';
import App from 'Component/App';
import Header from 'Component/Header';
import Content from 'Component/Content';
import Picker from 'Component/Job/Picker';
import View from 'Component/Job/View';

render(
  <App>
    <Header/>
    <Content>
      <Picker/>
      <View/>
    </Content>
  </App>,
  document.getElementById('root')
);
