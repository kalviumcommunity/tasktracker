"use client";

import { useState } from "react";
import { seedTasks, Task } from "./tasks";
import TaskCard from "./TaskCard";

export default function HomePage() {
  // TODO (Task 3 - useState): keep the list of tasks in state, starting from
  // seedTasks, so the screen updates when a task is added. Replace this line with:
  //   const [tasks, setTasks] = useState(seedTasks);
  const tasks = seedTasks;

  // TODO (Task 3 - useState): keep the text typed in the input in state.
  // Replace this line with:
  //   const [title, setTitle] = useState("");
  const title = "";

  // TODO (Task 4 - submit handler): when the form is submitted, add a new task.
  //   1. call e.preventDefault() so the page does not reload
  //   2. if title.trim() is "", just return (ignore empty input)
  //   3. build a new task:  const newTask: Task = { id: tasks.length + 1, title: title.trim(),
  //                            priority: "Medium", done: false };
  //   4. add it:  setTasks([...tasks, newTask])
  //   5. clear the box:  setTitle("")
  function handleSubmit(e) {
    // your code here
  }

  return (
    <section>
      <h1>TaskTracker</h1>
      <p className="muted">{tasks.length} tasks</p>

      {/* TODO (Task 5 - form and controlled input): on the <form> tag, add
            onSubmit={handleSubmit}
          and on the <input> add two attributes:
            value={title}
            onChange={(e) => setTitle(e.target.value)} */}
      <form className="add-form">
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
