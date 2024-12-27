import UserTable from '@/components/assets/UserTable';
import { useRouter } from 'next/router';

export default function UsersPage() {
  const router = useRouter();
  const page = router.query.page ? parseInt(router.query.page, 10) : 1;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-center font-extrabold text-2xl text-blue-600 mb-6">User Management Table</h1>
      <UserTable page={page} />
    </div>
  );
}
