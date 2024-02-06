import React from "react";
import Masonry from 'react-masonry-component';

// propsで受け取ったimagesのひとつひとつ(image)に対して(map)要素をバラして処理する
const ImageList=(props)=>{
    const images=props.images.map((image)=>{
        return (
            <a 
                href={image.pageURL} 
                key={image.id} 
                target='_blank' 
                rel='noopener noreferrer' 
                className="ui medium image"
            >
                <img src={image.webformatURL} alt={image.tags}/>
            </a>
        )
    })
    return <Masonry className="image-list">{images}</Masonry>;
    // Masonryを用いてimagesをレンガ状に並べる
};

export default ImageList;