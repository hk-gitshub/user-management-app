// hooks/useUsers.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async ({ queryKey }) => { // Destructure queryKey
  const page = queryKey[1]; // Extract page from queryKey
  const { data } = await axios.get(
    `https://dummyjson.com/users?skip=${(page - 1) * 10}&limit=10`
  );
  return { users: data.users, total: data.total };
};

export const useUsers = (page) => {
  return useQuery({
    queryKey: ['users', page], // Query key now includes the page
    queryFn: fetchUsers, // Pass the function directly
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};