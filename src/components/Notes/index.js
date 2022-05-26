import React, { useContext, useEffect } from 'react';
import { NoteListContext } from '../context/NoteListContext';
import Note from '../Note';

import './styles.css'

export default function Notes(){

    const {noteList, setNoteList} = useContext(NoteListContext)

    useEffect(() => {
        getNotes()
    }, [])

    function getNotes(){
        const notesLocal = localStorage.getItem('notes')
        if(!notesLocal){
            localStorage.setItem('notes', [])
        }else {
            const notesLocal = JSON.parse(localStorage.getItem('notes'));
            setNoteList(notesLocal)
        }    
    }

    return(
        <div className='notes'>
            {noteList.map(note => (
                <Note 
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}/>
            ))}
        </div>
    )
}