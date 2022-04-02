import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user ) => (
          <li key = {user.id}>
            the name is {user.name} the age is { user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
