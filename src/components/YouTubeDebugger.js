// Code YouTubeDebugger Component Here
import React from 'react'


export default class YouTubeDebugger extends React.Component {

    constructor(){
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
            }
        }
    }
}

    bitrateClick = () =>{
        this.setState({
            settings: {...this.state.settings, bitrate:12 }
            
        })
        console.log(this.state.settings.bitrate)
    }

    resolutionClick = () => {
        this.setState({
            //settings: {...this.state.settings.video, resolution: "720p" }
            settings: {...this.state.settings, video: {...this.state.settings.video, resolution: "720p"}}
        })
    }
    render(){
        return (
        <div>
            <button className = 'bitrate' onClick ={this.bitrateClick}> Change bitrate </button>
            <button className = 'resolution' onClick = {this.resolutionClick}> Change Resolution </button>
        </div>
        )
    }
}