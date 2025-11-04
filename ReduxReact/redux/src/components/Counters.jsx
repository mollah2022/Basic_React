import Button from "./Button";
import Count from "./Count";

const Counters = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <div className="bg-white text-black mx-auto shadow rounded h-40 w-1/3  mb-8 p-10">
        <div className="">
          <Count count={count} />
        </div>
        <div className="flex justify-evenly items-center mt-6">
          <Button onHandler={onIncrement}>Increment</Button>
          <Button onHandler={onDecrement} type="danger">
            Decrement
          </Button>
        </div>
      </div>
    </>
  );
};
export default Counters;
