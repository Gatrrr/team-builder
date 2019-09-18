import React, { useState } from 'react';
import ReactDOM from "react-dom"; 
import './App.css';
import Form from './components/Form';
import Notes from './components/Notes';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1, 
      name: "Matt Ryan", 
      email: "MattRyan@gmail.com",
      role: "Quarterback of the Atlanta Falcons"
    }
  ]);

  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      name: note.name,
      email: note.email,
      role: note.role,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <h1>Member</h1>
      <Form addNewNote={addNewNote} />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
