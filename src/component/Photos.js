import Photo from "./Photo";

const Photos = ({photos}) =>{
    return(
        <div className="photoes">
            {photos.map((photo)=>(<Photo key ={photo.id} photo={photo}/>))}
        </div>
    )
}
export default Photos