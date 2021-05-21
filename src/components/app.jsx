import React, {Component} from 'react';
import SongMapping from './songs';

class App extends Component {
    state = { 
        songs: [
        {
            id: 1,
            title: 'Hello',
            album: 'Free',
            artist: 'Doors',
            genre: 'Rock',
            releaseDate: '1970'
        },    
        {
            id: 2,
            title: 'Bye',
            album: 'Free',
            artist: 'Doors',
            genre: 'Rock',
            releaseDate: '1970'
        },    
           
        ]
    }
   
    deleteSong(songId){
        const originalSongs = [...this.state.songs]
        debugger;
        this.setState(originalSongs.filter(function(song){
            if (song.id === songId){
                originalSongs.pop(song)
            }
            return originalSongs
        })
        );
    }

    render() {

        const bindNewState = this.deleteSong.bind(this);

        return (
            <div>
                <table>
                    <tbody>
                        <SongMapping songs={this.state.songs} deleteSong={bindNewState}/>
                    </tbody>
                </table>
            </div>
           
        );
    }
}

export default App;