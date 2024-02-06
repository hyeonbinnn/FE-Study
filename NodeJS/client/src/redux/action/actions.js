import axios from 'axios';
import { ActionType } from './actionType';

export const loginUser = (dataToSubmit) => {
  const req = axios.post('/api/users/login', dataToSubmit).then((res) => res.data);
  return {
    type: ActionType.LOGIN_USER,
    payload: req,
  };
};
