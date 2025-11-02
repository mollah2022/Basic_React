import Button from "./Button";
import Count from "./Count";

const Counters = ({ onIncrement, onDecrement, count }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button onHandler={onIncrement}>Increment</Button>
        <Button type="danger" onHandler={onDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
};
export default Counters;
