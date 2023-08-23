import { useState, useEffect } from "react";

export const useJsonFetch = (url: string, opts: any) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const { method = "GET", content } = opts;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const request = await fetch(url, {
          method: method,
          headers: new Headers({ "content-type": "application/json" }),
          body: content ? JSON.stringify({ content }) : null,
        });

        if (!request.ok) {
          throw new Error(request.statusText);
        }

        const response = request.status === 200 ? await request.json() : null;

        setData(response);
        setError(null);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [data, loading, error];
};
