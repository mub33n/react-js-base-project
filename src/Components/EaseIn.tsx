import React from 'react';
import FadeIn from 'react-fade-in';

type Props = {
  children: React.ReactNode;
};

export default function EaseIn({ children }: Props) {
  return <FadeIn delay={100}>{children}</FadeIn>;
}
