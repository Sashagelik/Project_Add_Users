import Card from "../UI/Card";
import s from "../Users/UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={s.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} лет
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
