import React, {Component} from 'react';
import SongMapping from './songs';
import SongForm from './songForm';
import axios from 'axios';
import TableFilter from './tableFilter';

class App extends Component {
    state = { 
        songsData: [],
        songs: {
            title: '',
            album: '',
            artist: '',
            genre: '',
            releaseDate: ''
        },        
        updatedItems: [],
        filterTitle: '',
        filterAlbum: '',
        filterGenre: '',
        filterReleaseDate: '',
        filterArtist: ''

    }

    

    async makeGetRequest(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            console.log(response.data)
            this.setState({
                songsData: response.data
            })
        }
        catch (ex) {
            console.log('Error in API call!');
        }
    }

   
    async deleteSong(songId){
        try{
            await axios.delete(`http://127.0.0.1:8000/music/${songId}`)
            const songsData = this.state.songsData;
            const newSongsData = songsData.filter(i => i.id !== songId)
            this.setState({ songsData: newSongsData })
        }
        catch (ex) {
            console.log('Error in API call!');
        }
    }

    addSong(song){
        const originalSongs = [...this.state.songsData]
        const pushedSong = originalSongs.push(song)
        this.setState({pushedSong});
    }
    
    handleFilterChange(event, key) {
        const inputValue = event.target.value;
        this.setState({ [key]: inputValue }, () => {
          this.handleFilterSubmit();
        });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(){
        let response = await axios.post(`http://127.0.0.1:8000/music/`, { title: this.state.title,
        album: this.state.album,
        release_date: this.state.release_date, 
        artist: this.state.artist,
        genre: this.state.genre })
        this.setState({
            songData: [...this.state.songsData, response.data]
        })
        window.location.reload();
    }

    handleFilterSubmit(){
        const itemsUpdate = this.state.songsData.filter((song) => {
            var filterTitle =
              song.title
                .toLowerCase()
                .indexOf(this.state.filterTitle.toLowerCase()) > -1;
            var filterAlbum =
              song.album.toLowerCase().indexOf(this.state.filterAlbum.toLowerCase()) >
              -1;
            var filterArtist =
              song.artist.toLowerCase().indexOf(this.state.filterArtist.toLowerCase()) >
              -1;
            var filterReleaseDate =
              song.artist.toLowerCase().indexOf(this.state.filterReleaseDate.toLowerCase()) >
              -1;
            var filterGenre =
              song.genre.toLowerCase().indexOf(this.state.filterGenre.toLowerCase()) >
              -1;
            return filterTitle && filterAlbum && filterArtist && filterArtist && filterArtist && filterReleaseDate && filterGenre;
          });
          this.setState({ updatedItems: itemsUpdate }, () => {
            console.log(this.state.updatedItems);
          });
      
    }

    componentDidMount(){
        this.makeGetRequest();
    }
    
    renderList = () => {
        const { updatedItems } = this.state;
    return (
      <div>
        {updatedItems.map((updatedItem) => {
          return (
                <tr>
                    <td>{updatedItem.title}</td>
                    <td> {updatedItem.album}</td>
                    <td>{updatedItem.artist}</td>
                    <td>{updatedItem.genre}</td>
                    <td>{updatedItem.release_date}</td>
                </tr>
          );
        })}
      </div>
    );
    }

    render() {

        const bindNewState = this.deleteSong.bind(this);
        const handleSubmit = this.handleSubmit.bind(this);
        const handleChange = this.handleChange.bind(this);
        const handleFilterChange = this.handleFilterChange.bind(this)
        const handleFilterSubmit = this.handleFilterSubmit.bind(this)

        return (
            <div>
                <table>
                    <tbody>
                        {console.log(this.state.songsData)}
                        <SongMapping songs={this.state.songsData} deleteSong={bindNewState}/>
                    </tbody>
                </table>
                <div>
                    <SongForm handleSubmit={handleSubmit} songs={this.state.songsData} handleChange={() => handleChange}/>
                </div>
                <div>
                    <h2>Filter by Fields:</h2>
                        <TableFilter handleFilterSubmit={handleFilterSubmit} songs={this.state.songsData} handleFilterChange={handleFilterChange} filterTitle={this.state.filterTitle} filterAlbum={this.state.filterAlbum} filterGenre={this.state.filterGenre} filterReleaseDate={this.state.filterReleaseDate} filteArtist={this.filteArtist} />
                </div>
                <div>
                    <h2>Results:</h2>
                    <table>
                        {this.renderList()}
                    </table>
                </div>  
            </div>
           
        );
    }
}

export default App;