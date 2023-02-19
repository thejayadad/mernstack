import React, {useEffect, useState} from 'react'

import axios from "axios";


const Notes = () => {
  const[notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

const getNotes = async() => {
  const response = await axios.get("http://localhost:5000/")
  setNotes(response.data);
}
  return (
    <div>
      <h2>All Notes</h2>
      {
        notes.map((note, index) => (
          <div className='card' key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))
      }


    </div>
  )
}

export default Notes