import React from "react";
import useFetch from "./useFetch";

const CutomHook = () => {
  const { Data, isLoading, Err } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
    

  const loadingMsg = <p className="text-center">Data Is Loading...</p>;
  const ErrMsg = <p className="text-center">{Err}</p>;

  return (
    <div className="card w-100 h-100 p-3 mt-5">
      <h1 className="text-center">Custom Hooks Example Posts Data</h1>
      {isLoading && loadingMsg}
      {Err && ErrMsg}

      {Data && (
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CutomHook;
