type Task = {
  title: string;
  description: string;
  isCompleted: boolean;
};

export function TaskCard({ task }: { task: Task }) {
  return (
    <div>
      <h2>
        {task.isCompleted && "✅"} {task.title}
      </h2>
      <p>{task.description}</p>
    </div>
  );
}
