// import { API, graphqlOperation, Hub } from 'aws-amplify';
import { useEffect, useState } from "react";
// import { ON_UPDATE_PROFILE_SUCCESS, USER_PROFILE_STORAGE_KEY, USER_PROFILE_VERSION_STORAGE_KEY } from '../../constants';
// import { Profile } from '../../interfaces/user';
// import * as queries from '../api/graphql/pmsQueries';
// import useProfile from './useProfile';
// import useQueryGraphqlCommon from './useQueryGraphqlCommon';

// const useLazyQueryProfile = () => {
//   const [data, setData] = useState<Profile>({} as Profile);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { setCurrentUser } = useProfile();
//   const localStorageKey = USER_PROFILE_STORAGE_KEY;
//   const { QueryGraphqlCommon } = useQueryGraphqlCommon();

//   const fetchData = async (isFetching = false) => {
//     const profileFromStorageJsonString = localStorage.getItem(localStorageKey);
//     const profileFromStorage = profileFromStorageJsonString ? JSON.parse(profileFromStorageJsonString) : null;
//     if (
//       profileFromStorage?.version &&
//       profileFromStorage?.version === USER_PROFILE_VERSION_STORAGE_KEY &&
//       profileFromStorage &&
//       !isFetching
//     ) {
//       setCurrentUser(profileFromStorage);
//       setData(profileFromStorage);
//       return;
//     }

//     try {
//       setLoading(true);
//       const result = await QueryGraphqlCommon(queries.getMemberProfile);
//       const profile = (result as any)?.data?.getMemberProfile || {};
//       localStorage.setItem(localStorageKey, JSON.stringify({ ...profile, version: USER_PROFILE_VERSION_STORAGE_KEY }));
//       setCurrentUser(profile);
//       setData(profile);
//       // setCurrentUser({ ...profile, avatar: 'chim.jpeg' });
//       // setData({ ...profile, avatar: 'chim.jpeg' });
//     } catch (error) {
//       setError(error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     Hub.listen(ON_UPDATE_PROFILE_SUCCESS, async () => {
//       localStorage.removeItem(localStorageKey);
//       await fetchData();
//     });

//     return () => {
//       Hub.remove(ON_UPDATE_PROFILE_SUCCESS, undefined);
//     };
//   }, []);

//   return { data, loading, fetchData, error };
// };

// export default useLazyQueryProfile;
