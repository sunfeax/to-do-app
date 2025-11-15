export type Task = {
  id: number;
  title: string;
  isDone: boolean;
} 

export interface TodoListProps {
  tasks: Task[];
}

export interface TodoItemProps {
  task: Task;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}