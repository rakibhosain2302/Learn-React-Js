import React from "react";
import useFetch from "../hooks/Custom/useFetch";

const DataFetch = () => {
  const {Data, isLoading, Err} = useFetch("http://localhost:5000/users");

  return (
    <div className="mt-5">
      <h1 className="text-center mt-5">Custom Json Server Data Fetch Example</h1>

      {isLoading && <p className="text-center">Data Is Loading...</p>}
      {Err && <p className="text-center text-danger">{Err}</p>}

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>UserName</th>
          </tr>
        </thead>

        <tbody>
          {Data &&
            Data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFetch;
