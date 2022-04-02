import React, { useState } from "react";
import AddUser from "./components/Usres/AddUser";
import UserList from "./components/Usres/UsersList";

function App() {
  const [usersList, SetUsersList] = useState([]);
  const addUserHandler = (username, UserAge) => {
    SetUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: username, age: UserAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UserList users={usersList} />}
    </>
  );
}

export default App;
