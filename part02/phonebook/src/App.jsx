import { useState } from 'react';

const App = () => {
  const [person, setPerson] = useState([
    {
      name: 'Arto Hellas',
      number: 302319912,
    },
  ]);
  const [newName, setNewName] = useState('New name..');
  const [newNumber, setNewNumber] = useState('New number...');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (person.some((person) => person.name === newName)) {
      alert(`${newName} already exists in the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      setPerson(person.concat(newPerson));
      setNewName('');
    }
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        {/* { Name } */}
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        {/* Number */}
        <div>
          number: <input onChange={handleNumber} value={newNumber} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {person.map((person) => {
          return (
            <li key={person.name}>
              {person.name} - {person.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
