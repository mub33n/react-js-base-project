import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import palette from '../../Utilities/Palette';
import LoginDetails from './Components/LoginDetails';
import ForgottenPassword from './Components/ForgottenPassword';
import ResetPasswordEmailSent from './Components/ResetPasswordEmailSent';
import Background from './Images/Background.jpg';
import EaseIn from '../../Components/EaseIn';

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(${Background});
  background-color: rgba(0, 0, 0, 0.5); /* Tint color */
  background-blend-mode: multiply;
  background-size: cover;
  background-position: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  width: 96%;
  @media (max-height: 576px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const LoginContainer = styled.div`
  box-shadow: 0px 0px 20px 1px black;
  min-width: 330px;
  max-width: 360px;
  min-height: 480px;
  max-height: 550px;
  width: 36%;
  height: 50%;
  background-color: ${palette.WHITE};
  border-radius: 5px;
  padding: 50px;

  @media (max-height: 576px) {
    width: 50%;
    height: 100%;
    box-shadow: unset;
    background-color: unset;
    border-radius: 20px;
    padding: 26px;
  }

  @media (max-width: 820px) {
    width: 100%;
    height: 42%;
    box-shadow: 1px 2px 20px ${palette.GREY_LIGHT};
    background-color: ${palette.WHITE};
    border-radius: 20px;
    padding: 26px;
  }

  @media (max-width: 576px) {
    width: 100%;
    background-color: unset;
    box-shadow: unset;
    z-index: 1;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [forgotPassword, setForgetPassword] = React.useState<boolean>(false);
  const [loading, isLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [resetPasswordEmailSent, setResetPasswordEmailSent] =
    React.useState<boolean>(false);

  const dispatch = useDispatch();

  const [rehydrateComplete, setRehydrateComplete] = React.useState(
    useSelector((state: any) => state._persist.rehydrated),
  );

  const onClickLogin = async () => {
    console.log('TODO');
  };

  const navigateToLogin = () => {
    isLoading(false);
    setForgetPassword(false);
    setResetPasswordEmailSent(false);
  };

  const navigateToChangeEmailAddress = () => {
    isLoading(false);
    setForgetPassword(true);
    setResetPasswordEmailSent(false);
  };

  const navigateToEmailSent = () => {
    isLoading(false);
    setForgetPassword(false);
    setResetPasswordEmailSent(true);
  };

  const navigateToForgottenPassword = () => setForgetPassword(true);

  return (
    <Root>
      <EaseIn>
        <Container>
          <Wrapper>
            <LoginContainer>
              {!forgotPassword && !resetPasswordEmailSent && (
                <LoginDetails
                  setEmail={setEmail}
                  setPassword={setPassword}
                  onClickForgotPassword={navigateToForgottenPassword}
                  onClickLogin={onClickLogin}
                />
              )}
              {forgotPassword && (
                <ForgottenPassword
                  setEmail={setEmail}
                  onClickBackToLogin={navigateToLogin}
                  onClickResetPasswordEmail={navigateToEmailSent}
                />
              )}
              {resetPasswordEmailSent && (
                <ResetPasswordEmailSent
                  onClickBackToLogin={navigateToLogin}
                  onClickChangeEmailAddress={navigateToChangeEmailAddress}
                />
              )}
            </LoginContainer>
          </Wrapper>
        </Container>
      </EaseIn>
    </Root>
  );
}
