
const ReloadButton = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-96 bg-gray-100">
    <p className="mb-4 text-lg text-gray-700">
      Please check your internet connection.
    </p>
    <button
      onClick={handleReload}
      className="px-6 py-3 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      Reload Page
    </button>
  </div>
  );
};

export default ReloadButton;
