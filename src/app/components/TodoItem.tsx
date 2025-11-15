import { TodoItemProps } from "../types/task";

export default function TodoItem({ task }: TodoItemProps) {
    return <li className="flex ">{task.title}</li>
}
