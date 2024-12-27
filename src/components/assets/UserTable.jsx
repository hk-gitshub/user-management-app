import { useMemo, useState } from 'react';
import { MdArrowUpward, MdArrowDownward, MdImportExport } from 'react-icons/md';
import {
    createColumnHelper,
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    flexRender,
} from '@tanstack/react-table';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import Pagination from './Pagination';
import { useRouter } from 'next/router';
import { useUsers } from '@/hooks/useUsers';
import Loader from './Loader';
import { Input } from '../ui/input';

export default function UserTable({ page }) {
    const router = useRouter();
    const { data, isLoading, error } = useUsers(page);

    const users = data?.users || [];
    const totalUsers = data?.total || 0;
    const totalPages = Math.ceil(totalUsers / 10);

    const columnHelper = createColumnHelper();
    const columns = useMemo(
        () => [
            columnHelper.accessor('firstName', { header: 'First Name' }),
            columnHelper.accessor('lastName', { header: 'Last Name' }),
            columnHelper.accessor('email', { header: 'Email' }),
            columnHelper.accessor('phone', { header: 'Phone' }),
        ],
        []
    );

    const [globalFilter, setGlobalFilter] = useState('');
    const table = useReactTable({
        data: users,
        columns,
        state: {
            pagination: { pageIndex: page - 1, pageSize: 10 },
            globalFilter,
        },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: true,
        pageCount: totalPages,
    });

    const handlePageChange = (newPage) => {
        router.push(`/users?page=${newPage}`);
    };

    const handleSearchChange = (e) => {
        setGlobalFilter(e.target.value);
    };

    if (isLoading) return <Loader />;
    if (error) return <div className="text-red-500 text-center">Error: {error.message}</div>;

    if (!data || !data.users || data.users.length === 0) {
        return <div className="text-center text-gray-500">No users found.</div>;
    }

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <Input
                value={globalFilter}
                onChange={handleSearchChange}
                placeholder="Search users..."
                className="mb-4 w-full border border-gray-300 rounded-lg p-2"
            />

            <Table className="w-full border border-gray-300">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="cursor-pointer">
                                    {header.isPlaceholder ? null : (
                                        <>
                                            <span>{header.column.columnDef.header}</span>
                                            {header.column.getCanSort() && (
                                                <span
                                                    onClick={header.column.getToggleSortingHandler()}
                                                    className="ml-2 text-sm"
                                                >
                                                    {header.column.getIsSorted()
                                                        ? header.column.getIsSorted() === 'desc'
                                                            ? <MdArrowDownward className="inline-block text-lg" />
                                                            : <MdArrowUpward className="inline-block text-lg" />
                                                        : <MdImportExport className="inline-block text-lg" />}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
