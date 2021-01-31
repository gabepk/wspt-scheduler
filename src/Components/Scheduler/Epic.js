import React from 'react';
import styles from './Epic.module.css';

const Epic = ({ epics, setEpics, nextId }) => {
  const [newEpic, setNewEpic] = React.useState('');
  const [counter, setCounter] = React.useState(nextId);

  function addEpic() {
    if (!newEpic || newEpic.length <= 0) return;
    const epicAlreadyExists = epics.find((epic) => epic.name === newEpic);
    if (epicAlreadyExists) {
      alert('Epic already exists');
    } else {
      const epic = { id: counter, name: newEpic };
      setCounter(counter + 1);
      setEpics((epics) => [...epics, epic]);
    }
    setNewEpic('');
  }

  function updateEpic({ target }) {
    const newEpics = [...epics];
    newEpics.find((epic) => epic.id === target.id).name = target.value;
    setEpics(newEpics);
  }

  function deleteEpic(id) {
    setEpics((epics) => epics.filter((epic) => epic.id !== id));
  }

  return (
    <div>
      <div className={styles.newEpic}>
        <input
          type="text"
          placeholder="Epic"
          value={newEpic}
          onChange={({ target }) => setNewEpic(target.value)}
        />
        <button onClick={addEpic}>Add Epic</button>
      </div>

      <ul className={styles.epics}>
        {epics.map((epic) => {
          return (
            <li className={styles.epic} key={epic.id}>
              <input
                id={epic.id}
                className={styles.epicInput}
                value={epic.name}
                onClick={({ target }) => target.classList.add('editable')}
                onChange={updateEpic}
                onBlur={({ target }) => target.classList.remove('editable')}
              />
              <button
                className={styles.removeButton}
                onClick={() => deleteEpic(epic.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Epic;
