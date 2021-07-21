import { useState } from 'react';
import Form from './component/Form';
import Photos from './component/Photos';


const App =() =>{

  const [photos, setPhotos]=useState([])

  const getAlbumId=(id)=>{
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then(response=>response.json())
    .then(data=>{
      setPhotos(data)
    })
  }

  return (
    <div className="App">
      <h3 style={{ color:'green'}}>PHOTO ALBUM</h3> 

      <Form onSearch={getAlbumId}/><br/>

      <Photos photos={photos}/>
    </div>
  );
}

export default App;
