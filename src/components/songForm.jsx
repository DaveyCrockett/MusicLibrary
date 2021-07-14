import React from 'react';

function SongForm(props) {
    
    return (
      <form onSubmit={props.handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" id="title" value={props.songs.title} onChange={props.handleChange()}></input>
          <label>Album:</label>
          <input type="text" name="album" id="album" value={props.songs.album} onChange={props.handleChange()}></input>
          <label>Artist:</label>
          <input type="text" name="artist" id="artist" value={props.songs.artist} onChange={props.handleChange()}></input>
          <label>Genre:</label>
          <input type="text" name="genre" id="genre" value={props.songs.genre} onChange={props.handleChange()}></input>
          <label>Release Date</label>
          <input type="text" name="releaseDate" id="releaseDate" value={props.songs.releaseDate} onChange={props.handleChange()}></input>
          <button type="submit">Submit</button>
      </form>
    );
}
export default SongForm;