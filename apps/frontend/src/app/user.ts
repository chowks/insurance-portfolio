'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setLoading, setUsers, setError } from './features/userSlice';
import { RootState } from './login/store';
import { User } from './types/users';

export const useUsers = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get<{ data: User[] }>('https://regres.in/api/users');
        const filteredUsers = response.data.data.filter(
          (user) =>
            user.first_name.startsWith('G') || user.last_name.startsWith('W')
        );
        dispatch(setUsers(filteredUsers));
      } catch (err) {
        dispatch(setError('Failed to fetch users'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUsers();
  }, [dispatch]);

  return { users, loading, error };
};