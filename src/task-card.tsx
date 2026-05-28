type Task = {
  title: string;
  description: string;
};

export function TaskCard({ task }: { task: Task }) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
}
