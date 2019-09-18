import React from "react";

const Notes = props => {
    return(
        <div className="note" key={Notes.id}>
            {props.notes.map(note => (
                <div className="note" key={note.id}>
                    <h2>{note.name}</h2>
                    <p>{note.email}</p>
                    <p>{note.role}</p>
                </div> 
            ))}
        </div>
    );
};

export default Notes; 