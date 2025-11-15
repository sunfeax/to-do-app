import { TodoListProps } from "../types/task";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks }: TodoListProps) {
    return (
        <ul>
            {tasks.map((task => (
                <TodoItem key={task.id} task={task}/>
            )))}
        </ul>
    )
}