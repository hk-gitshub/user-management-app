// ./pages/users/index.js
import UserTable from '@/components/assets/UserTable';
import { useRouter } from 'next/router';

export default function UsersPage() {
  const router = useRouter();
  const page = router.query.page ? parseInt(router.query.page, 10) : 1;

  return (
    <div>
      <h1 className="text-center font-bold text-lg mb-4">User Management Table</h1>
      <UserTable page={page} />
    </div>
  );
}