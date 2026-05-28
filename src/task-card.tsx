export function TaskCard() {
  const task = {
    title: "Dinner",
    description: "Fried rice",
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
}
