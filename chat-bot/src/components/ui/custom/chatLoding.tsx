
const SquareLoader = () => {
  return (
    <div className="flex items-center justify-center h-7 w-7">
      {/* Spinning ring with center square */}
      <div className="relative w-7 h-7 flex items-center justify-center">
        {/* Spinning ring */}
        <div className="w-full h-full border-4 border-blue-300 border-t-transparent rounded-full animate-spin" />

        {/* Center solid black square */}
        <div className="absolute w-2 h-2 bg-black" />
      </div>
    </div>
  );
};

export default SquareLoader;
