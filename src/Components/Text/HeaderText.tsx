import React, { ReactNode } from 'react';
import '../../App.css';

type HeaderTextProps = {
  children: string | ReactNode;
};

const headerStyle = {
  paddingTop: 4,
  paddingBottom: 4,
  fontSize: '26px',
  fontFamily: 'Lexend',
};

export default function HeaderText({ children }: HeaderTextProps) {
  return <div style={headerStyle}>{children}</div>;
}
