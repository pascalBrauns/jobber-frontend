import React from 'react';
import ImageIcon, { Props } from 'Component/ImageIcon';
import { Omit } from 'Type/TypeScript';

const GitHubIcon: React.FC<Omit<Props, 'src'>> = props => (
  <ImageIcon src='/github-icon.png' {...props}/>
);

export default GitHubIcon;
