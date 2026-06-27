import { Button } from "@/components/ui/button";
import type { Count } from "@/modules/counter/counter.type";
import type { Dispatch, SetStateAction } from "react";

export function CounterCard({
  count,
  setCount,
}: {
  count: Count;
  setCount: Dispatch<SetStateAction<Count>>;
}) {
  function handleIncrementCount() {
    setCount(count + 1);
  }

  function handleDecrementCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <span>Count: {count}</span>
      <Button onClick={handleIncrementCount}>Increment</Button>
      <Button onClick={handleDecrementCount}>Decrement</Button>
    </div>
  );
}
