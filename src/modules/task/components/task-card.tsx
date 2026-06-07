import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Task } from "../task.type";
import { TaskCheck } from "./task-check";

export function TaskCard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>
            <TaskCheck task={task} /> {task.title}
          </h2>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>
          <p>{task.description}</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
