// App.js
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const taskWithId = { ...newTask, id: tasks.length + 1, completed: false };
    setTasks([...tasks, taskWithId]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Aplicación de Tareas</h1>
      <TaskForm addTask={addTask} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={deleteTask} onToggleCompleted={toggleCompleted} />
      ) : (
        <p>No hay tareas por hacer.</p>
      )}
    </div>
  );
};

export default App;
