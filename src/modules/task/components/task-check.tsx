import type { Task } from "@/modules/task/task.type";

export function TaskCheck({ task }: { task: Task }) {
  return <span>{task.isCompleted && "✅"}</span>;
}
