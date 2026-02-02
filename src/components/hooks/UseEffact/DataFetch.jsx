import React, { useEffect, useState } from "react";

const loadingMsg = <p className="text-center">Data Is Loading...</p>;

const DataFetch = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [Err, setErr] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if(!res.ok){
            throw new Error("Something went wrong");
          }
          else{
            return res.json();
          }
        })
        .then((data) => {
          setUsers(data);
          setIsLoading(false);
          setErr(null);
        })
        .catch((Err) => {
          setErr(Err.message);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  const renderUsers =
    users &&
    users.map((user) => (
      <p className="text-center" key={user.id}>
        {user.name}
      </p>
    ));

  return (
    <div>
      <h1 className="mt-5 text-center">Data Fetch API</h1>
      {Err && <p className="text-center">{Err}</p>}
      {isLoading && loadingMsg}
      {renderUsers}
    </div>
  );
};

export default DataFetch;
