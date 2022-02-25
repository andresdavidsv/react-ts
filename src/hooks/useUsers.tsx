import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';

import { ReqResList, User } from '../interfaces/reqRes.interface';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const pagRef = useRef(1);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await reqResApi.get<ReqResList>('/users', {
        params: { page: pagRef.current },
      });
      if (res.data.data.length > 0) {
        setUsers(res.data.data);
      } else {
        pagRef.current--;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const nextPage = () => {
    pagRef.current++;
    loadUsers();
  };
  const beforePage = () => {
    if (pagRef.current > 1) {
      pagRef.current--;
      loadUsers();
    }
  };
  return {
    users,
    nextPage,
    beforePage,
  };
};
