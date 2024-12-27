import { Button } from '@/components/ui/button';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mt-4 items-center space-x-4">
            <Button
                onClick={handlePreviousPage}
                disabled={currentPage <= 1}
                className={`px-4 py-2 ${currentPage > 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}
            >
                Previous
            </Button>
            <span className="text-lg font-medium">
                Page {currentPage} of {totalPages}
            </span>
            <Button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                className={`px-4 py-2 ${currentPage < totalPages ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}
            >
                Next
            </Button>
        </div>
    );
}
