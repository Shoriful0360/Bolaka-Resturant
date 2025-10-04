import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hook/useAxiosPublic";
import UseAuthContext from "../hook/UseAuthContext";

const UseFetching = (crud, url, body = null) => {

  const axiosPublic = useAxiosPublic();
  const { user } = UseAuthContext();

  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: [url, user?.email],
    queryFn: async () => {
      let res;
      if (crud.toLowerCase() === "get") {
        res = await axiosPublic.get(url);
      } else if (crud.toLowerCase() === "post") {
        res = await axiosPublic.post(url, body);
      } else if (crud.toLowerCase() === "put") {
        res = await axiosPublic.put(url, body);
      } else if (crud.toLowerCase() === "delete") {
        res = await axiosPublic.delete(url);
      } else {
        throw new Error("Invalid CRUD method");
      }

      return res.data;
    },
    enabled: !!url,
  });

  return { data, isLoading, isError, error, refetch };
};

export default UseFetching;
