import React from 'react';

export default function useWindowDimensions() {
  const matchXS = window.matchMedia('(max-width: 576px)');
  const matchSM = window.matchMedia('(max-width: 767px)');
  const matchMD = window.matchMedia('(max-width: 992px)');

  const [isXS, setXS] = React.useState<boolean>(matchXS.matches);
  const [isSM, setSM] = React.useState<boolean>(matchSM.matches);
  const [isMD, setMD] = React.useState<boolean>(matchMD.matches);
  const [screenWidth, setWidth] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
    const handleXS = (e: any) => setXS(e.matches);
    const handleSM = (e: any) => setSM(e.matches);
    const handleMD = (e: any) => setMD(e.matches);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    matchXS.addListener(handleXS);
    matchSM.addListener(handleSM);
    matchMD.addListener(handleMD);
    return () => {
      matchXS.removeListener(handleXS);
      matchSM.removeListener(handleSM);
      matchMD.removeListener(handleMD);
    };
  }, []);
  return {
    isXS,
    isSM,
    isMD,
    isMobile: isXS || isSM || isMD,
    screenWidth,
  };
}
