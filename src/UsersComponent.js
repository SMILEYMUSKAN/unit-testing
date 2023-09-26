import { useEffect, useState } from "react";

var UsersComponent = () => {
  var [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => setUsers(user));
  }, []);
  return (
    <div className="border border-slate-500 max-w-fit m-auto mt-4 p-10 rounded  px-32 bg-red-400 text-white text-lg italic shadow">
      <h1 className="text-white text-4xl italic underline mb-5 text-center">
        Users
      </h1>

      {users ? (
        users.map((user) => (
          <div key={user.id} className="m-3">
            <h1 className="text-2xl text-slate-300">
              <p>Name : {user.name}</p>
            </h1>
            <h4 className="text-2xl">
              <p>Email : {user.email}</p>
            </h4>
          </div>
        ))
      ) : (
        <h1>Loading......</h1>
      )}
    </div>
  );
};

export default UsersComponent;
