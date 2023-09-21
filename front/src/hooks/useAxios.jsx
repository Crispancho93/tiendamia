import { useState, useEffect, useContext } from "react";
import { KeycloakContext } from "@context/KeycloakContext";
import axios from "axios";

const useAxios = (url) => {
  const { token } = useContext(KeycloakContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios(url, options);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useAxios;
