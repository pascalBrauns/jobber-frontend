import React from 'react';
import Icon from '@material-ui/core/Icon';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  }
});

export type Props = {
  src: string;
  style?: React.CSSProperties;
}

const ImageIcon: React.FC<Props> = ({ src, style }) => (
  <Icon
    classes={{ root: useStyles().iconRoot }}
    style={{
      ...(style || {})
    }}>
    <img
      src={src}
      className={useStyles().imageIcon}/>
  </Icon>
)

export default ImageIcon;
