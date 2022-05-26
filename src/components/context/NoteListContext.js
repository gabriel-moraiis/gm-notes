import React, {createContext, useState} from 'react';

export const NoteListContext = createContext()

export default function NoteListContextProvider({children}){

    const [noteList, setNoteList] = useState([])

    return(
        <NoteListContext.Provider value={{
            noteList,
            setNoteList
        }}>
            {children}
        </NoteListContext.Provider>
    )
}
