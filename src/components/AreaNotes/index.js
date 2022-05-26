import React, { useContext } from 'react';
import { NoteFormContext } from '../context/NoteFormContext';


import './styles.css'

import NoteForm from '../NoteForm';

export default function AreaNotes({children}) {
    
    const {visibleForm} = useContext(NoteFormContext)

    return(
        <section className='area-notes'>
            {children}
            {visibleForm && <NoteForm />}
        </section>
    )
}