import React from 'react';
import styles from './Scheduler.module.css';

const Scheduler = () => {
  return (
    <div className={`${styles.scheduler} container mainContainer`}>
      <div>Epic (crud)</div>
      <div>Task (crud)</div>
      <div>Task List (table with option to edit)</div>
      <div>Form to create SIM for selected tasks</div>
    </div>
  );
};

export default Scheduler;
