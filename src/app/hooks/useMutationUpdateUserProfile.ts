import { useMutation, useQueryClient } from "react-query";
import { showSuccessMessage } from "../helpers/messageHelper";
import { SERVER_LINK } from "../../constants";
import axios from "axios";
import { useAppDispatch } from "./useRedux";
import { setUser } from "../redux/slices/userSlice";
import useLazyQueryGetProfile from "./useLazyQueryGetUserProfile";
const mutationFn = (body) => {
  return axios.post(`${SERVER_LINK}/user`, body, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
};

const useMutationUpdateUserProfile = () => {
  const dispatch = useAppDispatch();
  const { fetchData: fetchUser } = useLazyQueryGetProfile();
  const queryClient = useQueryClient();
  const {
    isLoading: loading,
    error,
    mutateAsync,
  } = useMutation({
    mutationFn: (body) => mutationFn(body),
    onSuccess: () => {
      queryClient.invalidateQueries("useQueryGetUserProfile");
      showSuccessMessage("Cập nhật hồ sơ thành công");
      fetchUser(true).then(() =>
        dispatch(setUser(JSON.parse(localStorage.getItem("currentUser"))))
      );
    },
  });

  const doMutation = (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await mutateAsync(body as never);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  return { doMutation, loading };
};

export default useMutationUpdateUserProfile;
