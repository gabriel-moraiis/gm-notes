import React, { useContext } from 'react';
import { AiOutlineFileAdd, AiFillEdit } from 'react-icons/ai'
import { HiDocumentRemove } from 'react-icons/hi'

import './styles.css'
import { NoteFormContext } from '../context/NoteFormContext';
import { HighlighContext } from '../context/highlightContext';
import { NoteListContext } from '../context/NoteListContext';



export default function Buttons() {

    const {visibleForm, setVisibleForm} = useContext(NoteFormContext)
    const {highlight, setHighlight} = useContext(HighlighContext)
    const {setTitle, setDescription} = useContext(NoteFormContext)
    const {noteList, setNoteList} = useContext(NoteListContext)

    function handleClickEdit(){
        if(highlight){
            const noteSelected = noteList.find(note => note.id === highlight)
            setTitle(noteSelected.title)
            setDescription(noteSelected.description)
            setVisibleForm(true)
        }
    }

    function handleClickAdd(){
        setVisibleForm(!visibleForm) 
    }

    function handleClickRemove(){
        const noteSelectedIndex = noteList.findIndex(note => note.id === highlight)
        noteList.splice(noteSelectedIndex, 1)
        setNoteList([...noteList])
        setTitle('')
        setDescription('')
        setHighlight(false)
    }

    return (
        <div className='buttons'> 
            <button className='add' onClick={handleClickAdd}>
                <AiOutlineFileAdd className='icon' />
            </button>
            <button className='edit' onClick={handleClickEdit}>
                <AiFillEdit className={`icon ${!highlight && 'disabled'}`}/>
            </button>
            <button className='remove' onClick={handleClickRemove}>
                <HiDocumentRemove className={`icon ${!highlight && 'disabled'}`}/>
            </button>
        </div>
    )
}