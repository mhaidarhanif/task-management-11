import { TaskCard } from "./modules/task/components/task-card";
import { dataTasks } from "./modules/task/task.data";

export function App() {
  return (
    <div>
      <h1 className="bg-blue-200 text-5xl font-bold text-sky-800">
        Task Management
      </h1>

      {dataTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
