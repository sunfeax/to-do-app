import { TodoListProps } from "../types/task";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onEdit, onDelete, onToggle }: TodoListProps) {
  return (
    <ul>
      {tasks.map((task => (
        <TodoItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      )))}
    </ul>
  )
}