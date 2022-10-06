import React from 'react';
import styled from 'styled-components';
import palette from '../Utilities/Palette';

type ButtonProps = {
  onClick: () => void;
  buttonColor?: string;
  disabled?: boolean;
  width?: string;
  border?: string;
  borderColor?: string;
  icon?: React.ReactNode;
  name: string;
  textColor?: string;
  type?: string;
  position?: string;
};

const Button = styled.button.attrs(
  (props: {
    disabled: boolean;
    width: string;
    border: string;
    buttonColor: string;
    borderColor: string;
  }) => props,
)`
  width: ${(props) => props.width};
  height: 50px;
  background-color: ${(props) =>
    props.disabled ? palette.PRIMARY : props.buttonColor};
  border-radius: 10px;
  border: ${(props) => `${props.border} solid ${props.borderColor}`};
  box-shadow: 0px 3px 6px #00000029;
  cursor: pointer;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const Text = styled.div.attrs((props: { textColor: string }) => props)`
  font-size: 20px;
  color: ${(props) => props.textColor};
  font-family: Lexend;
`;

const TextwithIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function ButtonContainer({
  onClick,
  disabled,
  buttonColor,
  width,
  border,
  borderColor,
  icon,
  name,
  textColor,
  type,
  position,
}: ButtonProps) {
  switch (type) {
    case 'primary':
      return (
        <Button
          buttonColor={palette.PRIMARY}
          width={width}
          border={border}
          borderColor={borderColor}
          disabled={disabled}
          onClick={onClick}
        >
          <Text textColor={palette.WHITE}>{name}</Text>
        </Button>
      );
    case 'secondary': {
      return (
        <Button
          buttonColor={palette.WHITE}
          width={width}
          border="2px"
          borderColor={palette.PRIMARY}
          disabled={disabled}
          onClick={onClick}
        >
          <TextwithIconContainer>
            {position === 'left' && <div>{icon}</div>}
            <Text textColor={textColor}>{name}</Text>
            {position === 'right' && <div>{icon}</div>}
          </TextwithIconContainer>
        </Button>
      );
    }
    default:
      return (
        <Button
          buttonColor={buttonColor}
          width={width}
          border={border}
          borderColor={borderColor}
          disabled={disabled}
          onClick={onClick}
        >
          {icon ? (
            <TextwithIconContainer>
              <Text textColor={textColor}>{name}</Text>
              <div>{icon}</div>
            </TextwithIconContainer>
          ) : (
            <Text textColor={textColor}>{name}</Text>
          )}
        </Button>
      );
  }
}

ButtonContainer.defaultProps = {
  type: '',
  textColor: palette.WHITE,
  buttonColor: palette.PRIMARY,
  disabled: false,
  width: '100%',
  border: '0px',
  borderColor: palette.PRIMARY,
  icon: null,
  position: 'right',
};

export default ButtonContainer;
