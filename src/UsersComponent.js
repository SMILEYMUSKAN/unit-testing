import { useEffect, useState } from "react";

var UsersComponent = () => {
  var [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(user => setUsers(user))
  }, [])
    return <div>
        {users.map(user => <div key={user.id}>
            <h1>{user.name}</h1>
            <h4>{user.email}</h4>
        </div>)}
    </div>
};

export default UsersComponent;