import React from 'react';
import Card from './Card';
import List from './List';
import Filter from './Filter';
import Divider from './Divider';
import useLoader from './useLoader';

const Picker: React.FC = () => {
  useLoader();
  return (
    <Card>
      <Filter/>
      <Divider orientation='vertical'/>
      <List/>
    </Card>
  );
}

export default Picker;
