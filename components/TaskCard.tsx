import { Task, priorityEmoji } from "../lib/tasks";

// TODO (Task 3a — Typed Props): this component receives ONE task as a prop.
// Define a props type and use it on the parameter:
//
//   type TaskCardProps = { task: Task };
//   export default function TaskCard({ task }: TaskCardProps) { ... }
//
// Right now the parameter has no type — add the type.
//
// TODO (Task 3b — JSX): inside the returned JSX, fill the three marked spots:
//   - the badge: the priority emoji AND the priority text
//       (use {priorityEmoji(task.priority)} and {task.priority})
//   - the title: {task.title}
//   - show the text "✓ Done" ONLY when task.done is true
// Remember: in JSX the attribute is className (NOT class), and JS goes in { }.
export default function TaskCard({ task }) {
  return (
    <li className={task.done ? "task done" : "task"}>
      <span className="badge">{/* priority emoji + priority text here */}</span>
      <span className="title">{/* task title here */}</span>
      {/* show "✓ Done" here only when task.done is true */}
    </li>
  );
}
