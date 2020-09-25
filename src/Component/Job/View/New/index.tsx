import React from 'react';
import Container from './Container';
import Query from './Query';
import Header from './Header';
import SendButton from './Button/Send';
import { useSelector } from 'Type/Redux';
import { Query as TQuery } from 'Type/Job';
import useActions from 'Store/useActions';

const New: React.FC = () => {
  const { setQuery } = useActions();
  return (
    <Container>
      <Header/>
      <Query
        query={useSelector<TQuery>(state => state.Picker.query)}
        onChange={query => setQuery({ query })}/>
      <SendButton
        disabled={!useSelector<boolean>(state => state.Picker.queryIsValid)}/>
    </Container>
  );
}

export default New;
