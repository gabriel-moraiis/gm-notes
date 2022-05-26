import React, {createContext, useState} from 'react';

export const NoteFormContext = createContext()

export default function NoteFormContextProvider({children}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [visibleForm, setVisibleForm] = useState(false)

    return(
        <NoteFormContext.Provider
        value={{
            title,
            setTitle,
            description,
            setDescription,
            visibleForm,
            setVisibleForm
        }}>
            {children}
        </NoteFormContext.Provider>
    )
}