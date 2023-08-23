import { useJsonFetch } from "./useJsonFetch";

export const Loading = ({ url }: any) => {
  const [data, loading, error] = useJsonFetch(url + "loading", {});
  console.log(loading);
  return <div className="loading">{loading && <span>Loading...</span>}</div>;
};
