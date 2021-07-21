import { useState } from 'react'

const Form  = ({onSearch}) => {
    const [albumId,setAlbumId] = useState('')
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!albumId){
            alert(` ALBUM'S ID IS REQUIRED..... `)
            return 
        }
        onSearch(albumId)
        setAlbumId('')
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <input type="search" value={albumId} onChange={(e)=>setAlbumId(e.target.value)} className="inputText" placeholder="Enter album's Id..." />
            <button className="bt">Get Album Photos By Id</button>
        </form>
    )
}

export default Form
