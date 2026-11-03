// app/tasks.ts - the data for TaskTracker. This file is plain TypeScript (no React).

// Priority can only be one of these three exact strings. (Already done - do not change.)
export type Priority = "Low" | "Medium" | "High";

// A single task in the list. (Already done - do not change.)
export type Task = {
  id: number;
  title: string;
  priority: Priority;
  done: boolean;
};

// TODO (Task 1 - conditionals): return an emoji for a priority.
//   "Low" -> "🟢"     "Medium" -> "🟡"     anything else -> "🔴"
//   Write one if statement for Low and one for Medium, each with a return, for example:
//     if (priority === "Low") return "🟢";
//   The last line of the function returns "🔴" for High.
export function priorityEmoji(priority: Priority): string {
  // your code here
  return "⬜";
}

// Tasks the app starts with. (Already done - do not change.)
export const seedTasks: Task[] = [
  { id: 1, title: "Read the assignment brief", priority: "High", done: true },
  { id: 2, title: "Set up the project", priority: "Medium", done: false },
  { id: 3, title: "Plan my tasks", priority: "Low", done: false },
];
