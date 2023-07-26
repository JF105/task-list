// TaskItem.js
import React from "react";

const TaskItem = ({ task, onDelete, onToggleCompleted }) => {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        onClick={() => onToggleCompleted(task.id)}
      >
        {task.name} - {task.description}
      </span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
