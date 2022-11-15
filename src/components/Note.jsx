import React from "react";
import { AiFillDelete } from 'react-icons/ai';
const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className="note">
            <span> {text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <AiFillDelete
                    className="delete-icon"
                    size='1.3em'
                    onClick={() => handleDeleteNote(id)} />
            </div>
        </div>
    )
}

export default Note;