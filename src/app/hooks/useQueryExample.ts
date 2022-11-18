// import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from "react-query";
// // import * as queries from '../api/graphql/queries';
// import * as queries from '../api/graphql/pmsQueries';
// import usePermission from './usePermission';

// const query = (roleId) => API.graphql(graphqlOperation(queries.getRole, { roleId }));
// const useQueryGetRole = (roleId) => {
//   const { systemSetting } = usePermission();
//   const {
//     data: result,
//     isLoading: loading,
//     error,
//   } = useQuery<any>({
//     queryKey: ['useQueryGetRole', roleId],
//     queryFn: () => query(roleId),
//     enabled: systemSetting().canEdit,
//   });
//   // const [data, setData] = useState(undefined);
//   // const [error, setError] = useState(null);
//   // const [loading, setLoading] = useState(false);
//   // const { systemSetting } = usePermission();

//   // const fetchData = async () => {
//   //   if (!systemSetting().canEdit) return;

//   //   try {
//   //     setLoading(true);
//   //     const result = await API.graphql(graphqlOperation(queries.getRole, { roleId }));
//   //     setData((result as any)?.data?.getRole || {});
//   //   } catch (error) {
//   //     setError(error);
//   //   }
//   //   setLoading(false);
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);

//   // useEffect(
//   //   () => () => {
//   //     setData(undefined);
//   //     setError(null);
//   //     setLoading(false);
//   //   },
//   //   [],
//   // );

//   return { data: (result as any)?.data?.getRole || undefined, loading, error };
// };

// export default useQueryGetRole;
