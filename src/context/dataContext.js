import React, {useContext, useState} from 'react'

const DataContext = React.createContext()

export function DataProvider({children}){
    const [list, setList] = useState([])
    const [downloadAll,setDownloadAll] = useState(false)
    
    const value = {
        list,
        setList,
        downloadAll,
        setDownloadAll
    }
    return(
        <DataContext.Provider value={value}>
        {children}
        </DataContext.Provider>
    )
}

export function useData(){
    return(useContext(DataContext))
}
