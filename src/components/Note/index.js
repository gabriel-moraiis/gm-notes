import React, { useContext } from 'react';
import {HighlighContext} from '../context/highlightContext';
import { NoteFormContext } from '../context/NoteFormContext';
import { NoteListContext } from '../context/NoteListContext';


import './styles.css'

export default function Note({id, title, description}){

    const {highlight, setHighlight} = useContext(HighlighContext)
    const {setVisibleForm} = useContext(NoteFormContext)
    const {noteList} = useContext(NoteListContext)
    const {setTitle, setDescription} = useContext(NoteFormContext)



    function handleClickNote(){
        if(highlight){
            setVisibleForm(true)
            setHighlight(false)
        }else{
            setHighlight(id)
            const noteSelected = noteList.find(note => note.id === id)
            setTitle(noteSelected.title)
            setDescription(noteSelected.description)
            setVisibleForm(true)
        }
    }

    return(
        <div 
        id={id}
        className={`note ${highlight === id && 'highlight'}`} 
        onClick={handleClickNote}>
            <h2>
              {title}  
            </h2>
            <hr />
            <p>
            {description}         
            </p>
        </div>
    )
}