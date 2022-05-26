import React, {useState, createContext} from 'react';

export const HighlighContext = createContext();

export default function HighlighContextProvider({children}){

    const [highlight, setHighlight] = useState(false)

    return(
    <HighlighContext.Provider
    value={{
        highlight,
        setHighlight
    }}>
        {children}
    </HighlighContext.Provider>
    )
}