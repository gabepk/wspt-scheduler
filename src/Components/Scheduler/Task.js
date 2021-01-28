import React from 'react';
import styles from './Task.module.css';

const Task = ({ tasks }) => {
  return (
    <table className={styles.task}>
      <caption>Task List (table with option to edit)</caption>
      <tr>
        <th>Task</th>
        <th>Weight</th>
        <th>Estimation</th>
      </tr>
      {tasks.map((task) => {
        return (
          <tr key={task.name}>
            <td>{task.name}</td>
            <td>{task.weight}</td>
            <td>{task.estimation}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Task;
