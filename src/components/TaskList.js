// TaskList.js
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggleCompleted }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
