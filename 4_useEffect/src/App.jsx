import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then((rawData) => {
        return rawData.json();
      })
      .then((response) => {
        setUsers(response);
      });
  });

  return (
    <div>
      {users.map(function (user) {
        return <li key={user._id}>{user.first_name} {user.last_name}  ||  {user.Work_Title}</li>;
      })}
    </div>
  );
}

export default App;

