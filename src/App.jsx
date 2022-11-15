
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import './App.css'
import NoteList from './components/NoteList'
import Search from './components/Search';
import DarkMode from './components/DarkMode';

function App() {
  const [notes, setNotes] = useState(
    !localStorage.getItem("react-noteApp-data")
      ?
      [
        // {

        //   id: nanoid(),
        //   text: "This is first note",
        //   date: "11/11/2022"
        // },

        // {

        //   id: nanoid(),
        //   text: "This is second note",
        //   date: "18/11/2022"
        // },

        // {

        //   id: nanoid(),
        //   text: "This is third note",
        //   date: "19/11/2022"
        // },

        // {

        //   id: nanoid(),
        //   text: "This is forth note",
        //   date: "20/11/2022"
        // }
      ]
      : JSON.parse(localStorage.getItem("react-noteApp-data"))
  );

  const [searchNoteText, setSearchNoteText] = useState('')



  // save to note in local storage

  useEffect(() => {
    localStorage.setItem("react-noteApp-data", JSON.stringify(notes))
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  // delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((notes) => notes.id !== id);
    setNotes(newNotes);
  }

  //Apply the dark mode in body
  const handleDarkModeBody = () => {
    const element = document.body;
    element.classList.toggle("bodyDarkMode")
    console.log(element.classList);
  }


  return (
    <div className="container">
      <DarkMode handleDarkModeBody={handleDarkModeBody} />
      <Search handleSeacrhNotes={setSearchNoteText} />
      <NoteList
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchNoteText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote} />
    </div>
  )
}

export default App
