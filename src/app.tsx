import { TaskCard } from "./modules/task/components/task-card";
import { dataTasks } from "./modules/task/task.data";

export function App() {
  return (
    <div>
      <h1 className="font-bold text-5xl">Task Management</h1>

      {dataTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
