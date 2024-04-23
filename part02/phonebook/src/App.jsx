import { useState } from 'react';

const App = () => {
  const [person, setPerson] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('New name..');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (person.some((person) => person.name === newName)) {
      alert(`${newName} already exists in the list`);
    } else {
      const newPerson = {
        name: newName,
      };

      setPerson(person.concat(newPerson));
      setNewName('');
    }
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {person.map((person) => {
          return <li key={person.name}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
