const Photo= ({photo}) => {
    return (
        <div>
            <img src={photo.thumbnailUrl} alt=""/>
            <h3>{photo.title}</h3>
        </div>
    )
}

export default Photo
