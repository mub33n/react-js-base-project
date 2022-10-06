/* eslint-disable import/prefer-default-export */

import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

export function IsTokenValid() {
  const { token } = useSelector((state) => state.User);
  try {
    if (token === null) {
      return false;
    }
    const decode = jwtDecode(token);
    const { exp } = decode;
    const expiry = new Date(exp * 1000);
    const now = new Date();
    return expiry.getTime() > now.getTime();
  } catch (error) {
    console.error(error);
    return false;
  }
}
