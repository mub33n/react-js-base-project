import React, { ReactNode } from 'react';
import styled from 'styled-components';

type OverviewTextProps = {
  children: string | ReactNode;
};

const StyledText = styled.div`
  padding-bottom: 4px;
  font-weight: 300;
  font-size: 18px;
`;

export default function Title({ children }: OverviewTextProps) {
  return <StyledText>{children}</StyledText>;
}
