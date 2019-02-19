import React from 'react';

//Styles
import './ImageList.css';

const ImageList = props => {

    const images = props.images.map(image => {
        return <img className="image-list"src={image.urls.small} />
    });

    return <div> {images} </div>

    // return (

    //     <div className="ui three column grid">
    //         <div className="column">
    //             <div className="ui fluid card">
    //                 <div className="image">
    //                     {images}
    //                 </div>
    //                 <div className="content">
    //                     <a className="header">Foto 1</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}
export default ImageList
