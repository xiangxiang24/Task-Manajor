// import { useState } from 'react';
import { useEffect, useState } from 'react';
import type { Task } from './types/task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// import TaskItem from './components/TaskItem';
import TaskCounter from './components/TaskCounter';

function App() {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const remainingTasks = tasks.filter(task => !task.completed).length;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify((tasks)));
  }, [tasks]);

  const handleAddTask = (newTask: Omit<Task, 'id'>) => {
    const task: Task = {
      ...newTask,
      id: Date.now()
    }
    setTasks([...tasks, task]);
  };

  const handleToggle = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>📝 Task Manager 🪴</h1>
      <TaskCounter total = {tasks.length} remaining = {remainingTasks}/>
      <TaskForm onAdd={handleAddTask}/>
      <TaskList
        tasks={tasks}
        onDelete = {handleDelete}
        onToggle = {handleToggle}
      />

    </div>
  );
}

export default App;