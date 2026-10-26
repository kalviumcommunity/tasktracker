// lib/tasks.ts — the data model and small typed helpers for TaskTracker.
// This file is PLAIN TypeScript (no React).

// Priority is a fixed set of named values — an ENUM. You read and use it below.
export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

// A single task in the list.
export type Task = {
  id: number;
  title: string;
  priority: Priority;
  done: boolean;
};

// TODO (Task 1 — Utility Types): a task that is being ADDED does not have an
// `id` yet (the app creates the id). Define `NewTask` as the `Task` type WITHOUT
// the `id` field, using the Omit utility type. Write the line below:
//
//   export type NewTask = Omit<____, "____">;
//


// TODO (Task 2 — Narrowing with typeof): return an emoji for a priority.
// `value` can be a Priority (a string) OR a number shortcut.
// Use `typeof value === "number"` to narrow into two branches:
//   number:  1 -> "🟢" , 2 -> "🟡" , anything else -> "🔴"
//   string:  "Low" -> "🟢" , "Medium" -> "🟡" , anything else -> "🔴"
export function priorityEmoji(value: Priority | number): string {
  // your code here
  return "⬜";
}

// Tasks the app starts with. (Already done — do not change.)
export const seedTasks: Task[] = [
  { id: 1, title: "Read the assignment brief", priority: Priority.High, done: true },
  { id: 2, title: "Set up the project", priority: Priority.Medium, done: false },
  { id: 3, title: "Plan my tasks", priority: Priority.Low, done: false },
];
