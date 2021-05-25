import React, {Component} from 'react';
import SongMapping from './songs';
import SongForm from './songForm';
import axios from 'axios';

class App extends Component {
    state = { 
        songData: [],
        songs: {
            title: '',
            album: '',
            artist: '',
            genre: '',
            releaseDate: ''
        }        
    }

    componenetDidMount(){
        this.makeGetRequest();
    }

    async makeGetRequest(){
        try{
            let response = await axios.get('https://github.com/DaveyCrockett/music_library_API');
            console.log(response.data)
        }
        catch (ex) {
            console.log('Error in API call!');
        }
    }
   
    deleteSong(songId){
        const originalSongs = [...this.state.songsData]
        originalSongs.filter(function(song){
            if (song.id === songId){
                originalSongs.pop(song)
            }
            return originalSongs
        }
        );
        this.setState({songsData: originalSongs})
    }

    addSong(song){
        const originalSongs = [...this.state.songsData]
        const pushedSong = originalSongs.push(song)
        this.setState({pushedSong});
    }
    
    handleChange(event) {
        this.setState({[event.target.songs]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
    }
    
    render() {

        const bindNewState = this.deleteSong.bind(this);
        const handleSubmit = this.handleSubmit.bind(this);
        const handleChange = this.handleChange.bind(this);

        return (
            <div>
                <table>
                    <tbody>
                        <SongMapping songs={this.state.songsData} deleteSong={bindNewState}/>
                    </tbody>
                </table>
                <div>
                    <SongForm handleSubmit={handleSubmit} songs={this.state.songsData} handleChange={handleChange}/>
                </div>
            </div>
           
        );
    }
}

export default App;