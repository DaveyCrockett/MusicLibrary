import React from 'react';

function TableFilter(props) {
    
    return (
      <form onSubmit={props.handleFilterSubmit} onReset={props.handleFilterReset} id='filterReset'>
          <div className='songField'><label  className='songInputLabel'>Title:</label>
          <input type="text" name="filterTitle" id="title" value={props.filterTitle} onChange={(e) => props.handleFilterChange(e, "filterTitle")} className='songInput'></input></div>
          <div className='songField'><label  className='songInputLabel'>Album:</label>
          <input type="text" name="filterAlbum" id="album" value={props.filterAlbum} onChange={(e) => props.handleFilterChange(e, "filterAlbum")} className='songInput'></input></div>
          <div className='songField'><label  className='songInputLabel'>Artist:</label>
          <input type="text" name="fitlerArtist" id="artist" value={props.filterArtist} onChange={(e) => props.handleFilterChange(e, "filterArtist")} className='songInput'></input></div>
          <div className='songField'><label  className='songInputLabel'>Genre:</label>
          <input type="text" name="filterGenre" id="genre" value={props.filterGenre} onChange={(e) => props.handleFilterChange(e, "filterGenre")} className='songInput'></input></div>
          <div className='songField'><label  className='songInputLabel'>Release Date</label>
          <input type="text" name="filterRelease_date" id="release_date" value={props.filterReleaseDate} onChange={(e) => props.handleFilterChange(e, "filterReleaseDate")} className='songInput'></input></div>
          <button type='reset' className='formSubmit'>Reset Form</button>
      </form>
    );
}
export default TableFilter;