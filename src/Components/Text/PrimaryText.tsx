import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Palette from '../../Utilities/Palette';

type TitleProps = {
  children: string | ReactNode;
};

const StyledText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

export default function Title({ children }: TitleProps) {
  return <StyledText>{children}</StyledText>;
}
