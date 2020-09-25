import React from 'react';
import ImageIcon from 'Component/ImageIcon';

export type Props = {
  style?: React.CSSProperties;
}

const JobberIcon: React.FC<Props> = ({ style }) => (
  <ImageIcon
    src='/jobber-icon-check-only.png'
    style={style || {}}/>
)

export default JobberIcon;
