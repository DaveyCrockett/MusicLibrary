import React from 'react';

function SongMapping(props) {
    return (
        props.songs.map((item) => 
        <tr>
            <td>{item.title}</td>
            <td>{item.album}</td>
            <td>{item.artist}</td>
            <td>{item.genre}</td>
            <td>{item.release_date}</td>
            <td><button type="button" onClick={() => props.deleteSong(item.id)}>Delete</button></td>
        </tr>)
    );
}
export default SongMapping;