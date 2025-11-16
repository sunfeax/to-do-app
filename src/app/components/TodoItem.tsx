import { SquarePen, X } from "lucide-react";
import { TodoItemProps } from "../types/task";

export default function TodoItem({ task, onEdit, onDelete, onToggle }: TodoItemProps) {

  return (
    <li className="flex items-center justify-between gap-10 p-3 hover:bg-blue-400 hover:text-black transition g-6">
      {/* block with checkbox and task title */}
      <div className="flex gap-5 justify-between items-center">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 cursor-pointer"
          checked={task.isDone}
          onClick={() => onToggle(task.id)}
        />
        <p
          className={`flex-1 ${task.isDone ? "line-through text-gray-400" : "text-white"}`}
        >
          {task.title}
        </p>
      </div>

      {/* block with Edit and Delete icons */}
      <div className="flex gap-5">
        <SquarePen onClick={() => onEdit(task.id)}/>
        <X onClick={() => onDelete(task.id)}/>
      </div>
    </li>
  )
}
