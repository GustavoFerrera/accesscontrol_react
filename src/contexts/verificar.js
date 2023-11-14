import React, { useContext } from "react";
import { AuthContext } from "./auth";

const UserList = () => {
  const { getAllUsers } = useContext(AuthContext); // Certifique-se de que "getAllUsers" está definido no seu contexto

  const users = getAllUsers();

  return (
    <div>
      <h2>Lista de Usuários Cadastrados</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
