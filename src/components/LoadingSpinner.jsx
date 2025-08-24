const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-red-500"></div>
    </div>
  );
};

export default LoadingSpinner;