'use client';

import { SquarePen, X } from "lucide-react";
import { TodoItemProps } from "../types/task";

export default function TodoItem({ task }: TodoItemProps) {

  function onChangeTaskState(taskId: number) {
    console.log(`Change task with id ${taskId}`);
  }

  function onEditTask(taskId: number) {
    console.log(`Edit task with id ${taskId}`);
  }

  function onDeleteTask(taskId: number) {
    console.log(`Delete task with id ${taskId}`);
  }

  return (
    <li className="flex items-center justify-between p-3 hover:bg-blue-400 hover:text-black transition g-6">
      {/* block with checkbox and task title */}
      <div className="flex gap-3 justify-between items-center">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 cursor-pointer"
          checked={task.isDone}
          onClick={() => onChangeTaskState(task.id)}
        />
        <p
          className={`flex-1 ${task.isDone ? "line-through text-gray-500" : "text-gray-900"}`}
        >
          {task.title}
        </p>
      </div>

      {/* block with icons */}
      <div className="flex gap-3">
        <SquarePen onClick={() => onEditTask(task.id)}/>
        <X onClick={() => onDeleteTask(task.id)}/>
      </div>
    </li>
  )
}
