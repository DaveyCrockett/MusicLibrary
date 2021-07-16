import React from 'react';

function TableFilter(props) {
    
    return (
      <form onSubmit={props.handleFilterSubmit}>
          <label  className='songInputLabel'>Title:</label>
          <input type="text" name="filterTitle" id="title" value={props.filterTitle} onChange={(e) => props.handleFilterChange(e, "filterTitle")} className='songInput'></input>
          <label  className='songInputLabel'>Album:</label>
          <input type="text" name="filterAlbum" id="album" value={props.filterAlbum} onChange={(e) => props.handleFilterChange(e, "filterAlbum")} className='songInput'></input>
          <label  className='songInputLabel'>Artist:</label>
          <input type="text" name="fitlerArtist" id="artist" value={props.filterArtist} onChange={(e) => props.handleFilterChange(e, "filterArtist")} className='songInput'></input>
          <label  className='songInputLabel'>Genre:</label>
          <input type="text" name="filterGenre" id="genre" value={props.filterGenre} onChange={(e) => props.handleFilterChange(e, "filterGenre")} className='songInput'></input>
          <label  className='songInputLabel'>Release Date</label>
          <input type="text" name="filterRelease_date" id="release_date" value={props.filterRelease_Date} onChange={(e) => props.handleFilterChange(e, "filterRelease_date")} className='songInput'></input>
          <button type="submit" className='formSubmit'>Submit</button>
      </form>
    );
}
export default TableFilter;