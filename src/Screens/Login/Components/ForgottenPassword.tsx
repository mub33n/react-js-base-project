import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import InputField from '../../../Components/InputField';
import Button from '../../../Components/Button';
import palette from '../../../Utilities/Palette';

const Root = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
`;

const BackButtonContainer = styled.div`
  display: flex;
  flexdirection: row;
`;

const BackToLoginText = styled.div`
  cursor: pointer;
  text-decoration: underline;
  text-align: left;
  color: ${palette.PRIMARY};
  padding-left: 8px;
`;

const LoginText = styled.div`
  font-size: 50px;
  font-weight: 500;
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

const RequiredText = styled.div`
  color: ${palette.PRIMARY};
  font-size: 20;
  padding-top: 16px;
  font-weight: 500;
  text-align: left;
`;

const InstructionsText = styled.div`
  text-align: left;
`;

type Props = {
  setEmail: (email: string) => void;
  onClickBackToLogin: () => void;
  onClickResetPasswordEmail: () => void;
};

export default function ForgottenPassword({
  setEmail,
  onClickBackToLogin,
  onClickResetPasswordEmail,
}: Props) {
  const { t } = useTranslation();
  return (
    <Root>
      <BackButtonContainer>
        <div>←</div>
        <BackToLoginText onClick={onClickBackToLogin}>
          {t('login.back_to_login_page', 'Back to Login')}
        </BackToLoginText>
      </BackButtonContainer>
      <LoginText>{t('login.forgot_password', 'Forgot Password?')}</LoginText>
      <RequiredText>{t('required_label', '* Required')}</RequiredText>
      <InstructionsText>
        {t(
          'login.reset_password_instructions',
          'Please enter your email address and we will send you a resent link with instructions',
        )}
      </InstructionsText>
      <InputField
        width="90%"
        mobileWidth="90%"
        tabletWidth="90%"
        mandatory
        placeholder="you@example.com"
        header={t('generic.email_address', 'Email Address')}
        onChange={setEmail}
      />
      <Button
        name={t('generic.send_email', 'Send me an email')}
        onClick={onClickResetPasswordEmail}
      />
    </Root>
  );
}
