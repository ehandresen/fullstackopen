import { useState, useEffect } from 'react';

const App = () => {
  const initialPersons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ];

  const [persons, setPersons] = useState(initialPersons);
  const [newName, setNewName] = useState('New name..');
  const [newNumber, setNewNumber] = useState('New number...');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists in the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      {/* Search */}
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleSearch} />

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        {/* Number */}
        <div>
          number: <input onChange={handleNumber} value={newNumber} />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.id}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
