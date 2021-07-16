import React from 'react';
import './app.css'

function SongForm(props) {
    
    return (
      <form onSubmit={props.handleSubmit}>
        {console.log(props.songs)}
          <div className='songField'><label className='songInputLabel'>Title:</label>
          <input type="text" name="title" id="title" value={props.songs.title} onChange={props.handleChange()} className='songInput'></input></div>
          <div className='songField'><label className='songInputLabel'>Album:</label>
          <input type="text" name="album" id="album" value={props.songs.album} onChange={props.handleChange()} className='songInput'></input></div>
          <div className='songField'><label className='songInputLabel'>Artist:</label>
          <input type="text" name="artist" id="artist" value={props.songs.artist} onChange={props.handleChange()} className='songInput'></input></div>
          <div className='songField'><label className='songInputLabel'>Genre:</label>
          <input type="text" name="genre" id="genre" value={props.songs.genre} onChange={props.handleChange()} className='songInput'></input></div>
          <div className='songField'><label className='songInputLabel'>Release Date</label>
          <input type="text" name="release_date" id="release_date" value={props.songs.release_date} onChange={props.handleChange()} className='songInput'></input></div>
          <button type="submit" className='formSubmit'>Submit</button>
      </form>
    );
}
export default SongForm;