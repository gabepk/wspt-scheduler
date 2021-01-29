import React from 'react';
import styles from './Task.module.css';

const Task = () => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    setTasks([
      { id: 0, name: 'A', weight: 2, estimation: 2, epic: 0 },
      { id: 1, name: 'B', weight: 1, estimation: 3 },
      { id: 2, name: 'c', weight: 2, estimation: 3 },
    ]);
  }, []);

  return (
    <table className={styles.task}>
      <caption>Task List (table with option to edit)</caption>
      <thead>
        <tr>
          <th>Task</th>
          <th>Weight</th>
          <th>Estimation</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => {
          return (
            <tr key={task.name}>
              <td>{task.name}</td>
              <td>{task.weight}</td>
              <td>{task.estimation}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Task;
