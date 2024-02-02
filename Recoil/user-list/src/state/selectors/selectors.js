import { selector } from 'recoil';
import { userListState } from '../atoms/atoms';

export const userCountState = selector({
  key: 'userCountState',
  get: ({ get }) => {
    const users = get(userListState);
    return users.length;
  },
});
