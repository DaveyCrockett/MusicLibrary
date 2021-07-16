import React, {Component} from 'react';
import SongMapping from './songs';
import SongForm from './songForm';
import axios from 'axios';
import TableFilter from './tableFilter';
import './app.css'
import NarutoGo from '../images/NarutoGO.png';


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
                    <td className='songTable'>{updatedItem.title}</td>
                    <td className='songTable'> {updatedItem.album}</td>
                    <td className='songTable'>{updatedItem.artist}</td>
                    <td className='songTable'>{updatedItem.genre}</td>
                    <td className='songTable'>{updatedItem.release_date}</td>
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
            <div className='imgBanner'>
                <img alt='Naruto fan art' src={NarutoGo} />
            </div>
            <div className='appContainer'>
                <h1 className='title'>My Music Library</h1>
                <div className='songForm'>
                    <h2 className='subTitles'>Add a New Song!</h2>
                    <SongForm handleSubmit={handleSubmit} songs={this.state.songsData} handleChange={() => handleChange}/>
                </div>
                <table className='collapseBorder'>
                    <tbody>
                        <SongMapping songs={this.state.songsData} deleteSong={bindNewState}/>
                    </tbody>
                </table>
                <div className='filter'>
                    <h2 className='subTitles'>Filter by Fields:</h2>
                        <TableFilter handleFilterSubmit={handleFilterSubmit} songs={this.state.songsData} handleFilterChange={handleFilterChange} filterTitle={this.state.filterTitle} filterAlbum={this.state.filterAlbum} filterGenre={this.state.filterGenre} filterReleaseDate={this.state.filterReleaseDate} filteArtist={this.filteArtist} />
                </div>
                <div className='results'>
                    <h2 className='subTitles'>Results:</h2>
                    <table className='collapseBorder'>
                        {this.renderList()}
                    </table>
                </div>  
            </div>
           </div>
        );
    }
}

export default App;