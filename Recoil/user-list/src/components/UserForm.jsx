import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { userListState } from './../state/atoms/atoms';
import './User.css';

const UserForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const setUserList = useSetRecoilState(userListState);

  const onSubmit = (data) => {
    setUserList((oldUserList) => [...oldUserList, { name: data.name }]);
    reset();
  };

  return (
    <>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="add-form">
        <input
          type="text"
          placeholder="입력해주세요!"
          className="add-input"
          {...register('name', { required: true })}
        />
        <button type="submit" className="add-btn">
          +
        </button>
      </form>
    </>
  );
};

export default UserForm;
