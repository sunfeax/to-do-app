export type Task = {
  id: number;
  title: string;
  isDone: boolean;
  deleted: boolean;
} 

export interface TodoListProps {
  tasks: Task[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export interface TodoItemProps {
  task: Task;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}