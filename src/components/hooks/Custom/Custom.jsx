import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const { Data, isLoading, Err } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const loadingMsg = <p className="text-center">Data Is Loading...</p>;
  const ErrMsg = <p className="text-center text-danger">{Err}</p>;

  return (
    <div className="card w-100 h-100 p-3 mt-4">
      <h1 className="mt-3 text-center">Custom Hooks Example User Data</h1>

      {isLoading && loadingMsg}
      {Err && ErrMsg}

      {Data && (
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomHook;
