import type {Task} from '../types/task';
import TaskItem from './TaskItem';

type TaskListProps = {
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

function TaskList({tasks, onToggle, onDelete}: TaskListProps) {
  if (tasks.length == 0) return <p>No tasks yet</p>
  // TODO: Map over tasks and render TaskItem for each
  // Hint: Don't forget the key prop when mapping
    return (
        <div>
            {tasks.map(task => (
                <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;