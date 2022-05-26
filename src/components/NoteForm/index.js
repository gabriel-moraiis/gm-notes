import React, { useContext, useEffect } from 'react';
import {BiNote}  from 'react-icons/bi'
import {MdCancel}  from 'react-icons/md'
import {HighlighContext} from '../context/highlightContext';
import { NoteFormContext } from '../context/NoteFormContext';
import { NoteListContext } from '../context/NoteListContext';


import './styles.css'

export default function NoteForm(){

    const {title, setTitle, description, setDescription, visibleForm, setVisibleForm} = useContext(NoteFormContext);
    const {highlight,setHighlight} = useContext(HighlighContext)
    const {noteList, setNoteList} = useContext(NoteListContext)

    useEffect(() => {
        setLocal()
    }, [noteList])

    useEffect(() => {
        if(!highlight){
            setTitle('')
            setDescription('')
        }
    }, [highlight])

    function handleTitle(e){
        e.preventDefault()
        setTitle(e.target.value)
    }

    function handleDescription(e){
        e.preventDefault()
        setDescription(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(highlight){
            noteList.map(note => {
                if(highlight === note.id){
                    note.title = title
                    note.description = description
                }
            })
            setNoteList([...noteList])
            setTitle('')
            setDescription('')
        }else{
            e.preventDefault()
        setNoteList([
            ...noteList, 
            {
                id: String(Math.floor(Math.random() * 1000)),
                title,
                description,
            },
        ])
        setTitle('')
        setDescription('')
    }
    }

    function handleCancel(e){
        e.preventDefault()
        setVisibleForm(false)
        setTitle('')
        setDescription('')
        setHighlight(false)
    }

    function setLocal(){
        localStorage.setItem('notes', JSON.stringify(noteList))
    }

    return(
            <form className={`form-menu ${!visibleForm && 'hidden'}`}>
                <div>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" placeholder='Escreva o Título' value={title} onChange={handleTitle}/>
                </div>

                <div>
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" rows="10" placeholder='Escreva a descrição' value={description} onChange={handleDescription}></textarea>
                </div>

                <div className='buttons'>
                    <button onClick={handleCancel}>
                        <MdCancel className='icon'/>
                    </button>
                    <button type='submit' className='send' onClick={handleSubmit}>
                        <BiNote className='icon'/>
                    </button>
                </div>

            </form>
    )
}