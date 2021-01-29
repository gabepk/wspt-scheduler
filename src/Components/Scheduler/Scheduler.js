import React from 'react';
import Epic from './Epic';
import styles from './Scheduler.module.css';
import Task from './Task';

const Scheduler = () => {
  const [epics, setEpics] = React.useState(null);
  const [tasks, setTasks] = React.useState(null);

  React.useEffect(() => {
    const localEpicsStr = window.localStorage.getItem('epics');
    const localEpics = JSON.parse(localEpicsStr);
    setEpics(localEpics || []);

    const localTasksStr = window.localStorage.getItem('tasks');
    const localTasks = JSON.parse(localTasksStr);
    if (localTasks === null) {
      setTasks([]);
    } else {
      if (localTasks.length > 1) {
        setTasks(
          localTasks.sort((task1, task2) =>
            task1.estimation / task1.weight < task2.estimation / task2.weight
              ? -1
              : 1,
          ),
        );
      } else {
        setTasks(localTasks);
      }
    }
  }, []);

  React.useEffect(() => {
    // TODO: Optimize and add/remove one epic per interaction
    window.localStorage.setItem('epics', JSON.stringify(epics));
  }, [epics]);

  function getNextEpicId() {
    return epics.length === 0
      ? 0
      : Math.max(...epics.map((epic) => epic.id)) + 1;
  }

  function getNextTaskId() {
    return tasks.length === 0
      ? 0
      : Math.max(...tasks.map((task) => task.id)) + 1;
  }

  return (
    <div className={`${styles.scheduler} container mainContainer`}>
      {epics !== null && (
        <Epic epics={epics} setEpics={setEpics} nextId={getNextEpicId()} />
      )}
      {tasks !== null && (
        <Task tasks={tasks} setTasks={setTasks} nextId={getNextTaskId()} />
      )}
    </div>
  );
};

export default Scheduler;
