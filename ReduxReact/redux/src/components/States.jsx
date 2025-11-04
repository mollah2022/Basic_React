const States = ({ totalValue }) => {
  return (
    <>
      <div className="bg-white text-2xl font-semibold text-black mx-auto shadow rounded h-40 w-1/3 flex items-center justify-center">
        <h2 className="text-center">
          Total Value : <span className="text-red-500">{totalValue}</span>
        </h2>
      </div>
    </>
  );
};
export default States;
