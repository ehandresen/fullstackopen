import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import PersonService from './services/PersonService';

const Filter = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

const PersonForm = ({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

const PersonList = ({ persons, handleDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <>
            <li key={person.id}>
              {person.name} - {person.number}
            </li>
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('useeffect');

    PersonService.getAll().then((data) => {
      console.log('promise fulfilled');
      setPersons(data);
    });
  }, []);

  console.log('rendered', persons.length, 'persons');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists in the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      PersonService.create(newPerson).then(() => {
        console.log('new person added');
        setPersons(persons.concat(newPerson));

        setNewName('');
        setNewNumber('');
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm)
  );

  const handleDelete = (id) => {
    PersonService.deletePerson(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearch={handleSearch} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <PersonList persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
