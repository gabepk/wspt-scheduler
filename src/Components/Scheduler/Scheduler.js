import React from 'react';
import styles from './Scheduler.module.css';
import Task from './Task';

const Scheduler = () => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    setTasks([
      { name: 'A', weight: 2, estimation: 2 },
      { name: 'B', weight: 1, estimation: 3 },
      { name: 'c', weight: 2, estimation: 3 },
    ]);
  }, []);

  return (
    <div className={`${styles.scheduler} container mainContainer`}>
      <div>Epic (crud)</div>
      <div>Task (crud)</div>
      <Task tasks={tasks} />
      <div>Form to create SIM for selected tasks</div>
    </div>
  );
};

export default Scheduler;
