import React, { ReactNode, CSSProperties } from 'react';
import '../../App.css';

type BaseTextProps = {
  children: string | ReactNode;
  style?: CSSProperties;
};

const defaultProps = {
  style: {
    fontFamily: 'Lexend',
    fontSize: 14,
  },
};

export default function BaseText({ children, style }: BaseTextProps) {
  return <div style={{ ...defaultProps.style, ...style }}>{children}</div>;
}

BaseText.defaultProps = defaultProps;
