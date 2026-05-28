import { TaskCard } from "./task-card";

export function App() {
  return (
    <div>
      <h1>Task Management</h1>
      <TaskCard
        task={{
          title: "Breakfast",
          description: "Porridge",
          isCompleted: true,
        }}
      />
      <TaskCard
        task={{
          title: "Lunch",
          description: "Chicken soto",
          isCompleted: true,
        }}
      />
      <TaskCard
        task={{
          title: "Dinner",
          description: "Fried rice",
          isCompleted: false,
        }}
      />
    </div>
  );
}
