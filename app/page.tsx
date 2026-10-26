"use client";

import { useState } from "react";
import { Priority, seedTasks, type Task } from "../lib/tasks";
import TaskCard from "../components/TaskCard";

export default function HomePage() {
  // TODO (Task 4a — useState): keep the list of tasks in state, starting from
  // seedTasks, so the screen updates when a task is added. Replace this line with:
  //   const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const tasks: Task[] = seedTasks;

  // TODO (Task 4b — useState): keep the text typed in the input in state.
  // Replace this line with:
  //   const [title, setTitle] = useState("");
  const title = "";

  // TODO (Task 5a — Events/Forms): when the form is submitted, add a new task.
  //   1. call e.preventDefault() so the page does not reload
  //   2. if title.trim() is empty, just return (ignore empty input)
  //   3. build a new task:  { id: Date.now(), title: title.trim(),
  //                            priority: Priority.Medium, done: false }
  //   4. add it:  setTasks([...tasks, newTask])
  //   5. clear the box:  setTitle("")
  function handleAdd(e: React.FormEvent) {
    // your code here
  }

  return (
    <section>
      <h1>TaskTracker</h1>
      <p className="muted">{tasks.length} tasks</p>

      <form className="add-form" onSubmit={handleAdd}>
        {/* TODO (Task 5b — Controlled input): make this a controlled input by
            adding two attributes:
               value={title}
               onChange={(e) => setTitle(e.target.value)} */}
        <input className="search" placeholder="Add a task…" />
        <button type="submit" className="btn">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
      </ul>
    </section>
  );
}
