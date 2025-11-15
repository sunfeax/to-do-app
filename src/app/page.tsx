import Title from "./components/Title";
import tasks from "@/app/data/tasks.json";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
        <Title />
        <TodoList tasks={tasks} />
    </div>
  )
}
