import React, { useState } from "react";

const Form = props => {
 console.log(props);
 const [note, setNote] = useState({ name: "", email: "", role: "" });

 const handleChanges = e => {
     console.log(note);
     setNote({...note, [e.target.name]: e.target.value});
 };

 const submitForm = e => {
     e.preventDefault();
     props.addNewNote(note);
     setNote({ name: "", email: "", role: "" });
 };

 return (
     <form onSubmit={submitForm}>
         <label htmlFor="title"> Name </label>
         <input id="name" type="text" name="name" onChange={handleChanges} value={note.name} />
         <label htmlFor="note"> Email </label>
         <input id="email" type="text" name="email" onChange={handleChanges} value={note.email} />
         <label htmlFor="note"> Role </label>
         <input id="role" type="text" name="role" onChange={handleChanges} value={note.role} />
         <button type="submit"> Add Member </button>
     </form>
 )
}

export default Form; 