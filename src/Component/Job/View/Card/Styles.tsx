import CardStyles from 'Component/Card/Styles';

const ViewCardStyles: {
  [name: string]: React.CSSProperties;
} = {
  ...CardStyles,
  root: {
    ...CardStyles.root,
    width: '100%',
    height: 835,
    display: 'flex',
  }
}

export default ViewCardStyles;
