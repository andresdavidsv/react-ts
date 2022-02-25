import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/reqRes.interface';

export const Users = () => {
  const { users, nextPage, beforePage } = useUsers();

  const renderItem = ({ id, avatar, first_name, last_name, email }: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 35, borderRadius: 100 }}
          />
        </td>
        <td>
          {first_name} {last_name}{' '}
        </td>
        <td> {email} </td>
      </tr>
    );
  };

  return (
    <>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map((user) => renderItem(user))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={() => beforePage()}>
        Before
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => nextPage()}>
        Next
      </button>
    </>
  );
};
