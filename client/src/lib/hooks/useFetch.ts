import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_ITEMS_API_BASE;

const useFetch = (queryParams: string) => {
  const [ data, setData ] = useState<any>();
  const [ error, setError] = useState<any>();

  useEffect(() => {
    fetch(`${API_BASE}${queryParams}`)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((data) => setData(data))
    .catch(async (error) => {
      const _error = await error.json();
      setError(_error);
    });
  }, [queryParams]);

  return [data, error];
}

export default useFetch;