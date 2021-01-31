import React from 'react';
import styles from './Task.module.css';

const Task = ({ tasks, setTasks, nextId }) => {
  const [newTask, setNewTask] = React.useState({
    name: '',
    weight: '',
    estimation: '',
  });
  const [counter, setCounter] = React.useState(nextId);

  React.useEffect(() => {
    // TODO: Optimize and add/remove one task per interaction
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (!newTask || !newTask.name || newTask.name.length <= 0) return;

    if (newTask.estimation && newTask.estimation < 1) return;

    if (newTask.weight && (newTask.weight < 1 || newTask.weight > 5)) return;

    const taskAlreadyExists = tasks.find((task) => task.name === newTask.name);
    if (taskAlreadyExists) {
      alert('Task already exists');
    } else {
      const task = { ...newTask, id: counter };
      setCounter(counter + 1);

      task.weight = task.weight || 1;
      task.estimation = task.estimation || 1;

      const newTasks = [...tasks, task];
      updateTasksSorted(newTasks);
    }
    setNewTask({
      name: '',
      weight: '',
      estimation: '',
    });
  }

  function updateTasksSorted(newTasks) {
    if (newTasks.length > 1) {
      newTasks.sort((task1, task2) =>
        task1.estimation / task1.weight < task2.estimation / task2.weight
          ? -1
          : 1,
      );
    }
    setTasks(newTasks);
  }

  function updateTaskName(id, value) {
    const newTasks = [...tasks];
    newTasks.find((task) => task.id === id).name = value;
    setTasks(newTasks);
  }

  function updateTaskWeight(id, value) {
    const newTasks = [...tasks];
    newTasks.find((task) => task.id === id).weight = value;
    updateTasksSorted(newTasks);
  }

  function updateTaskEstimation(id, value) {
    const newTasks = [...tasks];
    newTasks.find((task) => task.id === id).estimation = value;
    updateTasksSorted(newTasks);
  }

  function deleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <section className={styles.task}>
      <div className={styles.row}>
        <div>Task</div>
        <div>
          Time
          <br />
          (min)
        </div>
        <div>
          Weight
          <br />
          (1-5)
        </div>
        <div className={styles.order}>T / W</div>
        <div></div>
      </div>
      <div className={`${styles.row} ${styles.newTaskForm}`}>
        <div>
          <input
            type="text"
            placeholder="Wash the dishes"
            value={newTask.name}
            onChange={({ target }) =>
              setNewTask({ ...newTask, name: target.value })
            }
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="0"
            value={newTask.estimation}
            onChange={({ target }) =>
              Number(target.value) > 0 &&
              setNewTask({ ...newTask, estimation: Number(target.value) })
            }
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="0"
            value={newTask.weight}
            onChange={({ target }) =>
              Number(target.value) > 0 &&
              Number(target.value) < 6 &&
              setNewTask({ ...newTask, weight: Number(target.value) })
            }
          />
        </div>
        <div className={styles.order}>
          {newTask.estimation && newTask.weight
            ? parseFloat(newTask.estimation / newTask.weight).toFixed(1)
            : '-'}
        </div>
        <div>
          <button className={styles.addButton} onClick={addTask}>
            +
          </button>
        </div>
      </div>
      {tasks.map((task) => {
        return (
          <div className={`${styles.row} ${styles.savedTasks}`} key={task.id}>
            <div>
              <input
                type="text"
                className={styles.taskInput}
                value={task.name}
                onClick={({ target }) => target.classList.add('editable')}
                onChange={({ target }) => updateTaskName(task.id, target.value)}
                onBlur={({ target }) => target.classList.remove('editable')}
              />
            </div>
            <div>
              <input
                type="number"
                min="1"
                className={styles.taskInput}
                value={task.estimation}
                onClick={({ target }) => target.classList.add('editable')}
                onChange={({ target }) =>
                  updateTaskEstimation(task.id, target.value)
                }
                onBlur={({ target }) => target.classList.remove('editable')}
              />
            </div>
            <div>
              <input
                type="number"
                min="1"
                max="5"
                className={styles.taskInput}
                value={task.weight}
                onClick={({ target }) => target.classList.add('editable')}
                onChange={({ target }) =>
                  updateTaskWeight(task.id, target.value)
                }
                onBlur={({ target }) => target.classList.remove('editable')}
              />
            </div>
            <div className={styles.order}>
              {parseFloat(task.estimation / task.weight).toFixed(1)}
            </div>
            <div>
              <button
                className={styles.removeButton}
                onClick={() => deleteTask(task.id)}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Task;
