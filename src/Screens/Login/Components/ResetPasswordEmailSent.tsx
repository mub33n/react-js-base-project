import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Button from '../../../Components/Button';
import palette from '../../../Utilities/Palette';

const Root = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
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

const TryAnotherEmailAddressText = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: ${palette.PRIMARY};
  text-align: left;
`;

const InstructionsText = styled.div`
  font-size: 20px;
  text-align: left;
`;

const DisclaimerTextContainer = styled.div`
  text-align: left;
`;

type Props = {
  onClickBackToLogin: () => void;
  onClickChangeEmailAddress: () => void;
};

export default function ResetPasswordEmailSent({
  onClickBackToLogin,
  onClickChangeEmailAddress,
}: Props) {
  const { t } = useTranslation();
  return (
    <Root>
      <LoginText>
        {t('login.reset_password_sent', 'Reset email sent')}
      </LoginText>
      <InstructionsText>
        {t(
          'login.reset_password_confirmation',
          'We have sent password recovery instructions to your email address.',
        )}
      </InstructionsText>
      <DisclaimerTextContainer>
        <span>
          {t(
            'login.check_spam',
            "If you haven't recieved an email, please check your spam filter or ",
          )}
        </span>
        <TryAnotherEmailAddressText onClick={onClickChangeEmailAddress}>
          {t('login.try_another_email', ' try another email address.')}
        </TryAnotherEmailAddressText>
      </DisclaimerTextContainer>
      <Button name={t('login.title', 'Login')} onClick={onClickBackToLogin} />
    </Root>
  );
}
