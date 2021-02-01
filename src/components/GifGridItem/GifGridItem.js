import React from 'react';
import './GifGridItem.css';

export default function GifGridItem({title,url}) {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
