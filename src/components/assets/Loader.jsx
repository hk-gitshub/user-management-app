export default function Loader() {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="flex flex-col items-center">
                <div className="loader-circle border-4 border-blue-400 border-t-transparent rounded-full h-12 w-12 animate-spin"></div>
                <p className="text-white text-sm mt-3">Loading, please wait...</p>
            </div>
        </div>
    );
}
