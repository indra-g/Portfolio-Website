import axios from "axios";
import { useCallback, useState } from "react";

const useHttp = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getdata = useCallback(async (url) => {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }
      const data = await response.data;
      setData(data);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }, []);
  const senddata = async (url, contactData) => {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await axios.post(url, {
        name: contactData.name,
        email: contactData.email,
        phoneNo: contactData.phoneNo,
        message: contactData.message,
      });
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }
      const data = await response.data;
      setData(data);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  };
  return {
    data,
    isLoading,
    error,
    getdata,
    senddata,
  };
};

export default useHttp;
