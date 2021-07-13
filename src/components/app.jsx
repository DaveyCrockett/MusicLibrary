import React, {Component} from 'react';
import SongMapping from './songs';
import SongForm from './songForm';
import axios from 'axios';

class App extends Component {
    state = { 
        songsData: [],
        songs: {
            title: '',
            album: '',
            artist: '',
            genre: '',
            releaseDate: ''
        }        
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
    
    handleChange(event) {
        this.setState({[event.target.songs]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
    }

    componentDidMount(){
        this.makeGetRequest();
    }
    
    render() {

        const bindNewState = this.deleteSong.bind(this);
        const handleSubmit = this.handleSubmit.bind(this);
        const handleChange = this.handleChange.bind(this);

        return (
            <div>
                <table>
                    <tbody>
                        {console.log(this.state.songsData)}
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