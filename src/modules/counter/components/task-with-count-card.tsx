import { useState } from "react";

import type { TaskWithCount } from "@/modules/counter/counter.type";
import { Button } from "@/components/ui/button";

export function TaskWithCountCard() {
  const [taskWithCount, setTaskWithCount] = useState<TaskWithCount>({
    title: "Walking",
    count: 0,
  });

  function handleIncrementCountInTask() {
    setTaskWithCount({
      ...taskWithCount,
      count: taskWithCount.count + 1,
    });
  }

  function handleDecrementCountInTask() {
    setTaskWithCount({
      ...taskWithCount,
      count: taskWithCount.count - 1,
    });
  }

  return (
    <div>
      <h1>{taskWithCount.title}</h1>
      <p>Count: {taskWithCount.count}</p>

      <Button onClick={handleIncrementCountInTask}>
        Increment count in task
      </Button>
      <Button onClick={handleDecrementCountInTask}>
        Decrement count in task
      </Button>
    </div>
  );
}
