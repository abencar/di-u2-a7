import { useState } from 'react';

export default function Form() {
    const[firstName,setFistName] = useState('');
    const[lastName,setLastName] = useState('');
  
    function handleFirstNameChange(e) {
      setFistName(e.target.value);
    }
  
    function handleLastNameChange(e) {
      setLastName(e.target.value);
    }
  
    function handleReset() {
      setFistName('');
      setLastName('');
    }
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Nombre"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Apellido"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hola, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reiniciar</button>
      </form>
    );
  }