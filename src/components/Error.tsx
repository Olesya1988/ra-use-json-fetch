import { useJsonFetch } from "./useJsonFetch";

export const Error = ({ url }: any) => {
  const [data, loading, error] = useJsonFetch(url + "error", {});
  console.log(error);
  return <div className="error">{error && <span>Error: {error}</span>}</div>;
};
