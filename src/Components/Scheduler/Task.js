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
    const taskAlreadyExists = tasks.find((task) => task.name === newTask.name);
    if (taskAlreadyExists) {
      alert('Task already exists');
    } else {
      const task = { ...newTask, id: counter };
      setCounter(counter + 1);

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
    <table className={styles.task}>
      <caption>Task List (table with option to edit)</caption>
      <thead>
        <tr>
          <th>Task</th>
          <th>Weight</th>
          <th>Estimation</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Task"
              value={newTask.name}
              onChange={({ target }) =>
                setNewTask({ ...newTask, name: target.value })
              }
            />
          </td>
          <td>
            <input
              type="number"
              placeholder="0"
              value={newTask.weight}
              onChange={({ target }) =>
                setNewTask({ ...newTask, weight: Number(target.value) })
              }
            />
          </td>
          <td>
            <input
              type="number"
              placeholder="0"
              value={newTask.estimation}
              onChange={({ target }) =>
                setNewTask({ ...newTask, estimation: Number(target.value) })
              }
            />
          </td>
          <td>
            <button className={styles.addButton} onClick={addTask}>
              +
            </button>
          </td>
        </tr>
        {tasks.map((task) => {
          return (
            <tr key={task.id}>
              <td>
                <input
                  type="text"
                  className={styles.taskInput}
                  value={task.name}
                  onClick={({ target }) => target.classList.add('editable')}
                  onChange={({ target }) =>
                    updateTaskName(task.id, target.value)
                  }
                  onBlur={({ target }) => target.classList.remove('editable')}
                />
              </td>
              <td>
                <input
                  type="number"
                  className={styles.taskInput}
                  value={task.weight}
                  onClick={({ target }) => target.classList.add('editable')}
                  onChange={({ target }) =>
                    updateTaskWeight(task.id, target.value)
                  }
                  onBlur={({ target }) => target.classList.remove('editable')}
                />
              </td>
              <td>
                <input
                  type="number"
                  className={styles.taskInput}
                  value={task.estimation}
                  onClick={({ target }) => target.classList.add('editable')}
                  onChange={({ target }) =>
                    updateTaskEstimation(task.id, target.value)
                  }
                  onBlur={({ target }) => target.classList.remove('editable')}
                />
              </td>
              <td>
                <button
                  className={styles.removeButton}
                  onClick={() => deleteTask(task.id)}
                >
                  x
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Task;
