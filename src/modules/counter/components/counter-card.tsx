import { useState } from "react";

import type { Count } from "@/modules/counter/counter.type";
import { Button } from "@/components/ui/button";

export function CounterCard() {
  const [count, setCount] = useState<Count>(0);

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
