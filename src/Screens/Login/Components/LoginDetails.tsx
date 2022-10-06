import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import InputField from '../../../Components/InputField';
import Button from '../../../Components/Button';
import palette from '../../../Utilities/Palette';

const Root = styled.div`
  opacity: 1;
  transition: opacity 0.25s;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
`;

const LoginText = styled.div`
  font-size: 30px;
  font-weight: 250;
  text-align: left;

  @media (max-height: 576px) {
    font-size: 32px;
    font-weight: 500;
    text-align: left;
  }

  @media (max-width: 820px) {
    font-size: 32px;
    font-weight: 500;
    text-align: left;
  }
`;

const LogoText = styled.div`
  font-size: 40px;
  font-weight: 500;
  text-align: left;

  @media (max-height: 576px) {
    font-size: 40px;
    font-weight: 500;
    text-align: left;
  }

  @media (max-width: 820px) {
    font-size: 40px;
    font-weight: 500;
    text-align: left;
  }
`;

const ForgottenPasswordText = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: left;
  color: ${palette.PRIMARY};
  text-decoration: underline;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
`;

type Props = {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onClickForgotPassword: () => void;
  onClickLogin: () => void;
};

export default function LoginDetails({
  setEmail,
  setPassword,
  onClickForgotPassword,
  onClickLogin,
}: Props) {
  const { t } = useTranslation();

  return (
    <Root>
      <LoginText>Welcome to</LoginText>
      <LogoText>Sample Project</LogoText>
      <InputField
        width="90%"
        mobileWidth="90%"
        tabletWidth="90%"
        mandatory
        placeholder="you@example.com"
        header={t('generic.email_address', 'Email Address')}
        onChange={setEmail}
      />
      <InputField
        width="90%"
        mobileWidth="90%"
        tabletWidth="90%"
        mandatory
        placeholder={t(
          'login.password_character_length',
          'Enter 6 characters or more',
        )}
        header={t('generic.password', 'Password')}
        type="password"
        onChange={setPassword}
      />
      <ForgottenPasswordText onClick={onClickForgotPassword}>
        {t('login.forgot_password', 'Forgot Password?')}
      </ForgottenPasswordText>
      <ButtonContainer>
        <Button name={t('login.title', 'Login')} onClick={onClickLogin} />
      </ButtonContainer>
    </Root>
  );
}
