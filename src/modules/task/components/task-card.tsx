import type { Task } from "../task.type";
import { TaskCheck } from "./task-check";

export function TaskCard({ task }: { task: Task }) {
  return (
    <div>
      <h2>
        <TaskCheck task={task} /> {task.title}
      </h2>
      <p>{task.description}</p>
    </div>
  );
}
