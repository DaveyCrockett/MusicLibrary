import React from 'react';
import './app.css'

function SongMapping(props) {
    console.log(props.songs)
    return (
        props.songs.map((item) => 
        <tr>
            <td className='songTable'>{item.title}</td>
            <td className='songTable'>{item.album}</td>
            <td className='songTable'>{item.artist}</td>
            <td className='songTable'>{item.genre}</td>
            <td className='songTable'>{item.release_date}</td>
            <td className='deleteRow'><button type="button" onClick={() => props.deleteSong(item.id)} className='btnDelete'>Delete</button></td>
        </tr>)
    );
}
export default SongMapping;