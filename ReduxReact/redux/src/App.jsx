import Counters from "./components/Counters";
import States from "./components/States";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./featuers/counters/counterSlice";
import Posts from "./components/Posts";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counterID) => {
    dispatch(increment(counterID));
  };

  const handleDecrement = (counterID) => {
    dispatch(decrement(counterID));
  };

  const totalValue = counters.reduce(
    (sum, currentValue) => sum + currentValue.value,
    0
  );

  return (
    <>
      <div className="h-full w-full bg-gray-200 text-black">
        <h1 className="text-center font-bold text-5xl text-red-700 pt-8 mb-10">
          Simple Counter Application...
        </h1>
        <div>
          {counters.map((counter) => (
            <Counters
              key={counter.id}
              count={counter.value}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
            />
          ))}
          <States totalValue={totalValue} />
          <Posts />
        </div>
      </div>
    </>
  );
}

export default App;
