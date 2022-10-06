import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import DeviceQuery from '../Utilities/DeviceQuery';
import palette from '../Utilities/Palette';

const Input = styled.input.attrs(
  (props: { width: string; mobileWidth: string; tabletWidth: string }) => props,
)`
  padding-left: 12px;
  font-size: 18px;
  width: ${(props) => props.width};
  padding: 1rem;
  margin-right: 1rem;
  background: ${palette.OFF_WHITE};
  border: 1px solid ${palette.LIGHT_GREY};
  box-shadow: inset 0px 3px 6px #00000029;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 1px solid ${palette.PRIMARY};
  }
  ::placeholder {
    font-family: 'Lexend';
  }
  @media (${DeviceQuery.tablet}) {
    width: ${(props) => props.tabletWidth};
  }
  @media (${DeviceQuery.mobile}) {
    width: ${(props) => props.mobileWidth};
  }
`;

const Root = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const MandatoryText = styled.div.attrs((props) => ({
  className: props.className,
}))`
  padding-left: 8px;
  color: ${palette.PRIMARY};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: 'Lexend';
`;

const PasswordShowHideButton = styled.div`
  position: absolute;
  bottom: 18px;
  right: 22px;
  color: ${palette.PRIMARY};
  textdecoration: underline;
  cursor: pointer;
`;

export const inputType = {
  TEXT: 'text',
  PASSWORD: 'password',
  NUMBER: 'number',
};

type InputFieldProps = {
  onChange: (event: string) => void;
  type?: string;
  header: string;
  placeholder?: string;
  mandatory?: boolean;
  disabled?: boolean;
  width?: string;
  mobileWidth?: string;
  tabletWidth?: string;
};

function InputField({
  onChange,
  type,
  header,
  placeholder,
  mandatory,
  disabled,
  width,
  mobileWidth,
  tabletWidth,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const { t } = useTranslation();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value);
  };

  return (
    <Root>
      {type === inputType.PASSWORD && (
        <PasswordShowHideButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? t('generic.hide', 'hide') : t('generic.show', 'show')}
        </PasswordShowHideButton>
      )}
      <Container>
        <TextContainer>
          <Header>{header}</Header>
          {mandatory && (
            <MandatoryText className="mandatory-text">*</MandatoryText>
          )}
        </TextContainer>
        <Input
          width={width}
          mobileWidth={mobileWidth}
          tabletWidth={tabletWidth}
          disabled={disabled}
          type={showPassword ? inputType.TEXT : type}
          onChange={onChangeHandler}
          placeholder={placeholder}
        />
      </Container>
    </Root>
  );
}

InputField.defaultProps = {
  placeholder: '',
  type: inputType.TEXT,
  mandatory: false,
  disabled: false,
  width: '15rem',
  mobileWidth: '10rem',
  tabletWidth: '9rem',
};

export default InputField;
