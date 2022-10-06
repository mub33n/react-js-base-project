import React, { ReactNode } from 'react';
import styled from 'styled-components';
import DeviceQuery from '../../Utilities/DeviceQuery';

type TitleProps = {
  children: string | ReactNode;
};

const StyledTitle = styled.div`
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 10px;
  @media (${DeviceQuery.tablet}) {
    font-size: 30px;
  }
`;

export default function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>;
}
