import { TaskCard } from "./task-card";

export function App() {
  return (
    <div>
      <h1>Task Management</h1>
      <TaskCard task={{ title: "Breakfast", description: "Porridge" }} />
      <TaskCard task={{ title: "Lunch", description: "Chicken soto" }} />
      <TaskCard task={{ title: "Dinner", description: "Fried rice" }} />
    </div>
  );
}
