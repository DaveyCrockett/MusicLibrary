import React from 'react';

function TableFilter(props) {
    
    return (
      <form onSubmit={props.handleFilterSubmit}>
          <label>Title:</label>
          <input type="text" name="filterTitle" id="title" value={props.filterTitle} onChange={(e) => props.handleFilterChange(e, "filterTitle")}></input>
          <label>Album:</label>
          <input type="text" name="filterAlbum" id="album" value={props.filterAlbum} onChange={(e) => props.handleFilterChange(e, "filterAlbum")}></input>
          <label>Artist:</label>
          <input type="text" name="fitlerArtist" id="artist" value={props.filterArtist} onChange={(e) => props.handleFilterChange(e, "filterArtist")}></input>
          <label>Genre:</label>
          <input type="text" name="filterGenre" id="genre" value={props.filterGenre} onChange={(e) => props.handleFilterChange(e, "filterGenre")}></input>
          <label>Release Date</label>
          <input type="text" name="filterRelease_date" id="release_date" value={props.filterRelease_Date} onChange={(e) => props.handleFilterChange(e, "filterRelease_date")}></input>
          <button type="submit">Submit</button>
      </form>
    );
}
export default TableFilter;