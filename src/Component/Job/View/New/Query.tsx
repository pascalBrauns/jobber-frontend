import React from 'react';
// @ts-ignore
import JSONInput from 'react-json-editor-ajrm';
// @ts-ignore
import locale from 'react-json-editor-ajrm/locale/en';
import { Query as TQuery } from 'Type/Job';

export type Props = {
  query: TQuery;
  onChange: (query: TQuery) => void;
}

const style = {
  container: {
    borderRadius: 7
  },
  body: {
    fontSize: 17
  },
  warningBox: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'rgb(57, 57, 57)'
  },
  labelColumn: {
    boxSizing: 'border-box',
    borderRight: '1px solid rgb(37, 37, 37)'
  }
}

const colors = {
  background: 'rgb(57, 57, 57)',
  keys: '#b38bf4',
  string: '#FF7D6F',
  error: '#FE6B8B'
}

const Query: React.FC<Props> = ({ query, onChange }) => (
  <JSONInput
    id='job-query'
    width='100%'
    height='97.5%'
    locale={locale}
    style={style}
    colors={colors}
    waitAfterKeypress={200}
    placeholder={query}
    onChange={({ jsObject }: {
      jsObject: TQuery
    }) => onChange(jsObject)}/>
);

export default Query;
