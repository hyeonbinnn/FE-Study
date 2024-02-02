import React from 'react';
import { useRecoilValue } from 'recoil';
import { userListState } from '../state/atoms/atoms';
import './User.css';

const UserList = () => {
  const userList = useRecoilValue(userListState);

  return (
    <>
      <h2>User List</h2>
      <ul className="add-ul">
        {userList.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
