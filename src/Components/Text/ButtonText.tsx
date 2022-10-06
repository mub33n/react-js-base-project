import React, { ReactNode } from 'react';
import styled from 'styled-components';
import '../../App.css';

type ButtonTextProps = {
  children: string | ReactNode;
};

const StyledText = styled.div`
  font-size: 20px;
  font-weight: 300;
  font-family: 'Lexend', sans-serif;
`;

export default function ButtonText({ children }: ButtonTextProps) {
  return <StyledText>{children}</StyledText>;
}
