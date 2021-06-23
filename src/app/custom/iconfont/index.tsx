/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'pause1' | 'play1' | 'pause' | 'play' | 'arrowback' | 'next2' | 'Prev' | 'Next' | 'arrow-right-bold' | 'arrow-left-bold' | 'Home' | 'menu' | 'sousuo' | 'user' | 'back' | 'dot';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
