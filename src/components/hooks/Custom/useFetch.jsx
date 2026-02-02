import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [Data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [Err, setErr] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setErr(null);
        })
        .catch((Err) => {
          setErr(Err.message);
          setIsLoading(false);
        });
    }, 2000);
  }, [url]);
  return { Data, isLoading, Err };
}


export default useFetch
