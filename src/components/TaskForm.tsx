import { useState } from 'react';
import type { Priority, Task } from '../types/task';

type TaskFormProps = {
  onAdd: (task: Omit<Task, 'id'>) => void;
};

function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) return;

    onAdd({
        title, 
        priority, 
        completed: false
    });

    setTitle("");
    setPriority("medium");
  };

  return (
    <form onSubmit={handleSubmit}
    style={{
      border: 'none',
      padding: '20px',
      margin: '10px 0',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgb(34 92 55 / 59%)'
    }}
    >
      <h2>Add New Task ✍🏻</h2>
      <div style={{
      display: 'flex',
      gap: '10px',
      margin: '20px 0',
      }}>
        <input 
        type="text"
        value={title}
        placeholder="Text title.."
        onChange={(e)=>setTitle(e.target.value)}
        style={{
          flex: 1,
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ddd',
        }}
        />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        style={{
          borderRadius: '4px',
          padding: '10px',
          border: '1px solid #ddd'
        }}
      >
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>

      <button 
        type='submit'
        style={{
          borderRadius: '4px',
          padding: '10px',
          border: 'none',
          backgroundColor: 'rgb(100 181 242)',
          color: 'white',
          fontWeight: 'bold'
        }}
      > Add</button>
      </div>
    </form>
  );
}
export default TaskForm;