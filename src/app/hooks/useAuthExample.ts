// import { Auth } from 'aws-amplify';
// import moment, { DurationInputArg1, DurationInputArg2 } from 'moment';
import { useState } from "react";
// import { useAppDispatch, useAppSelector } from '.';
// import {
//   COMPANY_LOGO_STORAGE_KEY,
//   EXPIRED_TIME_TOKEN,
//   LOGIN_PATH,
//   LONG_TIME_KEEP_LOGIN,
//   SHORT_TIME_KEEP_LOGIN,
//   USER_PERMISSION_STORAGE_KEY,
//   USER_PROFILE_STORAGE_KEY,
// } from '../../constants';
// import AuthExceptionEnum from '../../interfaces/enums/AuthError';
// import {
//   requiredChangePwUser as requiredChangePwUserSelector,
//   setRequiredChangePwUser as setRequiredChangePwUserAction,
// } from '../redux/slices/authSlice';
// import useMutationRegisterAccount from './useMutationRegisterAccount';

// const removeProfie = () => {
//   localStorage.removeItem(USER_PROFILE_STORAGE_KEY);
// };

// const removeLogoCompany = () => {
//   localStorage.removeItem(COMPANY_LOGO_STORAGE_KEY);
// };

// const removeExpiredTime = () => {
//   localStorage.removeItem(EXPIRED_TIME_TOKEN);
// };

// const removePermission = () => {
//   localStorage.removeItem(USER_PERMISSION_STORAGE_KEY);
// };

// export const logout = async () => {
//   try {
//     await Auth.signOut();
//   } catch (error) {
//     console.error('error signing out: ', error);
//   } finally {
//     removeExpiredTime();
//     removeProfie();
//     removeLogoCompany();
//     removePermission();
//     const params = new URL(window.location.toString()).searchParams;
//     if (window.location.pathname === '/timesheet' && params.get('date')) {
//       window.location.replace(LOGIN_PATH + ?date=${params.get('date')});
//       return;
//     }
//     window.location.replace(LOGIN_PATH);
//   }
// };

// const USER_EXIST = 40101;

// const useAuth = () => {
//   const dispatch = useAppDispatch();
//   const { doMutation: doMutationRegister } = useMutationRegisterAccount();
//   const [loading, setLoading] = useState(false);
//   const [isChangingPw, setIsChangingPw] = useState(false);
//   const [isSendingEmailForgotPw, sendingEmailForgotPw] = useState(false);
//   const [isResetPw, resettingPw] = useState(false);
//   const [isChangingCurrentPw, setIsChangingCurrentPw] = useState(false);

//   const [error, setError] = useState(null);
//   const [errorCompletePw, setErrorCompletePw] = useState(null);
//   const [errorSendingEmailForgotPw, setErrorSendingEmailForgotPw] = useState(null);
//   const [errorResetPw, setErrorResetPw] = useState(null);
//   const [errorChangeCurrentPw, setErrorChangeCurrentPw] = useState(null);

//   const setExpiredTime = (isRememerme) => {
//     const [amount, unit] = isRememerme ? LONG_TIME_KEEP_LOGIN : SHORT_TIME_KEEP_LOGIN;
//     const expiredTime = moment()
//       .add(amount as DurationInputArg1, unit as DurationInputArg2)
//       .format();
//     localStorage.setItem(EXPIRED_TIME_TOKEN, expiredTime);
//   };

//   const getExpiredTime = () => {
//     return localStorage.getItem(EXPIRED_TIME_TOKEN);
//   };

//   const checkTokenIsExpired = () => {
//     const expiredTime = getExpiredTime();
//     const expiredTimeMoment = moment(expiredTime);
//     const now = moment();

//     return now > expiredTimeMoment;
//   };

//   const login = ({
//     username,
//     password,
//     remember = false,
//   }: {
//     username: string;
//     password: string;
//     remember: boolean | undefined;
//   }) => {
//     setError(null);
//     setLoading(true);
//     return new Promise(async (resolve, reject) => {
//       try {
//         const user = await Auth.signIn(username, password);
//         setExpiredTime(remember);
//         removePermission(); // refetch permission everytime login
//         resolve(user);
//       } catch (error) {
//         setError(AuthExceptionEnum?.[error.code] || 'Error');
//         reject(error);
//       }
//       setLoading(false);
//     });
//   };

//   const register = ({
//     username,
//     password,
//     firstname,
//     lastname,
//   }: {
//     username: string;
//     password: string;
//     firstname: string;
//     lastname: string;
//   }) => {
//     setError(null);
//     setLoading(true);
//     return new Promise(async (resolve, reject) => {
//       try {
//         const res = await doMutationRegister({
//           input: {
//             email: username,
//             firstName: firstname,
//             lastName: lastname,
//             password: password,
//           },
//         });
//         if (res) {
//           setLoading(true);
//           login({ username: username, password, remember: false }) // fake login after register
//             .then((user) => {
//               removePermission(); // refetch permission everytime login
//               resolve(user);
//               setLoading(false);
//             })
//             .catch((error) => {
//               setLoading(false);
//               reject(error);
//             });
//         }
//       } catch (error) {
//         const codeErrorServer = JSON.parse(error?.errors[0]?.message)?.code;
//         if (codeErrorServer && codeErrorServer === USER_EXIST) {
//           setError('メールアドレスは既に存在しています。');
//         } else {
//           setError(AuthExceptionEnum?.[error.code] || 'Error');
//         }
//         setLoading(false);
//         reject(error);
//       }
//       setLoading(false);
//     });
//   };
//   const setRequiredChangePwUser = (user) => {
//     dispatch(setRequiredChangePwUserAction(user));
//   };

//   const requiredChangePwUser = useAppSelector(requiredChangePwUserSelector);

//   const changeFirsttimeLoginUserPw = (newPw: string) => {
//     if (!requiredChangePwUser) return;
//     setIsChangingPw(true);
//     return new Promise(async (resolve, reject) => {
//       try {
//         const user = Auth.completeNewPassword(requiredChangePwUser, newPw);
//         // fetchUserProfile();
//         resolve(user);
//         setRequiredChangePwUser(null);
//       } catch (error) {
//         setErrorCompletePw(AuthExceptionEnum?.[error.code] || 'Error');
//         reject(error);
//       }
//       setIsChangingPw(false);
//     });
//   };

//   // const logout = async () => {
//   //   try {
//   //     await Auth.signOut();

//   //     // removeCurrentUser();
//   //     removeExpiredTime();
//   //     removeProfie();
//   //     removePermission();
//   //     window.location.replace(LOGIN_PATH);
//   //   } catch (error) {
//   //     console.error('error signing out: ', error);
//   //   }
//   // };

//   const sendEmailForgotPw = (username: string) => {
//     sendingEmailForgotPw(true);
//     setErrorSendingEmailForgotPw(null);
//     return new Promise(async (resolve) => {
//       try {
//         const data = await Auth.forgotPassword(username);
//         resolve(data);
//       } catch (err) {
//         setErrorSendingEmailForgotPw(AuthExceptionEnum?.[err.code] || 'Error');
//       }
//       sendingEmailForgotPw(false);
//     });
//   };

//   const resetPw = ({ username, code, newPassword }: { username: string; code: string; newPassword: string }) => {
//     resettingPw(true);
//     setErrorResetPw(null);
//     return new Promise(async (resolve) => {
//       try {
//         const data = await Auth.forgotPasswordSubmit(username, code, newPassword);
//         resolve(data);
//       } catch (err) {
//         setErrorResetPw(AuthExceptionEnum?.[err.code] || 'Error');
//       }
//       resettingPw(false);
//     });
//   };

//   const changeCurrentPassword = (oldPw, newPw) => {
//     setIsChangingCurrentPw(true);
//     setErrorChangeCurrentPw(null);
//     return new Promise(async (resolve) => {
//       try {
//         const user = await Auth.currentAuthenticatedUser();
//         const data = await Auth.changePassword(user, oldPw, newPw);
//         resolve(data);
//       } catch (err) {
//         setErrorChangeCurrentPw(AuthExceptionEnum?.[err.code] || 'Error');
//       }
//       setIsChangingCurrentPw(false);
//     });
//   };

//   return {
//     loading,
//     login,
//     register,
//     error,
//     setRequiredChangePwUser,
//     requiredChangePwUser,
//     changeFirsttimeLoginUserPw,
//     isChangingPw,
//     errorCompletePw,
//     errorSendingEmailForgotPw,
//     isSendingEmailForgotPw,
//     sendEmailForgotPw,
//     isResetPw,
//     errorResetPw,
//     resetPw,
//     logout,
//     getExpiredTime,
//     removeExpiredTime,
//     checkTokenIsExpired,
//     isChangingCurrentPw,
//     errorChangeCurrentPw,
//     changeCurrentPassword,
//   };
// };

// export default useAuth;
