import { useState, useEffect } from "react";
import { MyState } from "../../types/home";

const FetchData = (url: string) => {
  const [state, setState] = useState<MyState>({
    data: [],
    isLoading: false,
    fetchErrorValue: "",
    fetchError: false,
  });

  useEffect(() => {
    const getData = async (url: string) => {
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));

      try {
        const response = await fetch(url, {
          headers: {
            "Content-type": "application/json", 
            Accept: "application/json", 
          },
        });

        if (!response.ok) {
          throw new Error("Could not fetch data for that resource");
        }
        const data = await response.json();
        setState((prev) => ({
          ...prev,
          data: data,
          fetchError: false,
          fetchErrorValue: "",
        }));
      } catch (error: any) {
        console.error(error);
        setState((prev) => ({
          ...prev,
          fetchError: true,
          fetchErrorValue: error.message,
        }));
      } finally {
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    };

    getData(url); // Invoke the getData function

  }, [url]);

  return {
    state,
  };
};

export default FetchData;
