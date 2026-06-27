import { TaskCard } from "@/modules/task/components/task-card";
import { dataTasks } from "@/modules/task/task.data";
import { CounterCard } from "@/modules/counter/components/counter-card";

export function App() {
  return (
    <div>
      <h1 className="bg-blue-200 p-4 text-5xl font-bold text-sky-800">
        Task Management
      </h1>

      <CounterCard />

      <ul className="flex flex-col gap-4 p-4">
        {dataTasks.map((task) => {
          return (
            <li key={task.id}>
              <TaskCard task={task} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
