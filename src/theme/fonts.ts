import {TextStyle} from 'react-native';

export const size = {
  xs: 12,
  sm: 14,
  normal: 16,
  md: 18,
  lg: 22,
  xl: 24,
};

export const weight: {[key: string]: TextStyle['fontWeight']} = {
  full: '900',
  semi: '600',
  thin: '400',
  bold: 'bold',
  normal: 'normal',
};