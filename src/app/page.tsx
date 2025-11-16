'use client';

import Title from "./components/Title";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { Task } from "./types/task";

export default function Home() {

  const tasksData: Task[] = [
    { id: 1, title: "Изучить React", isDone: false, deleted: false },
    { id: 2, title: "Сделать To-Do List", isDone: true, deleted: false },
    { id: 3, title: "Добавить localStorage", isDone: false, deleted: false },
    { id: 4, title: "Сдать экзамены", isDone: false, deleted: false },
  ];

  const [tasks, setTasks] = useState<Task[]>(tasksData);

  function handleDeleteTask(taskId: number) {
    alert(`Delete task with id ${taskId}`);
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  function handleEditTask(taskId: number) {
    console.log(`Edit task with id ${taskId}`);
  }

  function handleToggleTask(taskId: number) {
    console.log(`Change task with id ${taskId}`);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Title />
      <TodoList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onToggle={handleToggleTask}/>
    </div>
  )
}
