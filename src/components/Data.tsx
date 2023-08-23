import { useJsonFetch } from "./useJsonFetch";

export const Data = ({ url }: any) => {
  const [data, loading, error] = useJsonFetch(url + "data", {});
  console.log(data);
  return (
    <div className="data">
      {data && <span>Request successful. Status: {data.status}</span>}
    </div>
  );
};
