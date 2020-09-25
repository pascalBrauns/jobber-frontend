import React from 'react';

export default {
  root: {
    background: 'rgb(30, 30, 30)',
    boxShadow: [
      '0px 1px 3px rgba(0, 0, 0, 0.2)',
      '0px 2px 1px rgba(0, 0, 0, 0.12)',
      '0px 1px 1px rgba(0, 0, 0, 0.14)'
    ].join()
  }
} as {
  [name: string]: React.CSSProperties;
}
