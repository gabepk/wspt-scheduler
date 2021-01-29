import React from 'react';
import Epic from './Epic';
import styles from './Scheduler.module.css';
import Task from './Task';

const Scheduler = () => {
  const [epics, setEpics] = React.useState(null);

  React.useEffect(() => {
    const localEpicsStr = window.localStorage.getItem('epics');
    const localEpics = JSON.parse(localEpicsStr);
    setEpics(localEpics || []);
  }, []);

  function getNextId() {
    return epics.length === 0
      ? 0
      : Math.max(...epics.map((epic) => epic.id)) + 1;
  }

  return (
    <div className={`${styles.scheduler} container mainContainer`}>
      {epics !== null && (
        <Epic epics={epics} setEpics={setEpics} nextId={getNextId()} />
      )}
      <Task />
      <div>Form to create SIM for selected tasks</div>
    </div>
  );
};

export default Scheduler;
