import React from 'react';
import styled from 'styled-components';
import '../../App.css';

type SmallHeaderTextProps = {
  children: string;
};

const StyledText = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin: 0rem;
`;

export default function SmallHeaderText({ children }: SmallHeaderTextProps) {
  return <StyledText>{children}</StyledText>;
}
