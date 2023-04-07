import { useState } from "react";
import CreateUser from "./components/Users/CreateUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [addUser, setAddUser] = useState([]);

  const createUserHandler = (name, age) => {
    setAddUser((preveStateUser) => [
      ...preveStateUser,
      { name: name, age: age, id: Math.floor(Math.random().toString() * 100) },
    ]);
  };

  return (
    <div>
      <CreateUser onCreateUser={createUserHandler} />
      <UserList users={addUser} />
    </div>
  );
};

export default App;
