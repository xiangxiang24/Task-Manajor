import type {Task} from '../types/task';

type TaskItemProps = {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

const priorityColor = {
    low: "#2e8b57",
    medium: '#d4a017',
    high: "#d64545"
};

function TaskItem ({task , onToggle, onDelete}: TaskItemProps) {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px',
            marginBottom: '8px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            borderLeft: `5px solid ${priorityColor[task.priority]}`
          }}>
            <div
            style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
            }}
            >
                <input type="checkbox"
                    checked = {task.completed}
                    onChange={() => onToggle(task.id)}
                />
                <span style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "#888" : "black"
                    }}>
                    {task.title}
                </span>
            </div>
            <div style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
            }}>
                <span 
                style={{
                    color: priorityColor[task.priority],
                    border: '1px solid',
                    width: '3.5em',
                    textAlign: 'center',
                    padding: '5px',
                    fontSize: 'small',
                    borderRadius: '10px'
                }}
                >{task.priority}</span>
                <button 
                onClick={() => onDelete(task.id)}
                style={{
                    borderRadius: '4px',
                    padding: '10px',
                    border: 'none',
                    backgroundColor: 'rgb(238, 77, 77)',
                    color: 'white',
                    fontWeight: 'bold'
                }}
                >Delete</button>
            </div>
        </div>
      );
}
export default TaskItem;