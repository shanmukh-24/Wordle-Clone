import { useState } from "react";

import ReactSound from 'react-sound';
import moogic from './moogic.mp3';


const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
  )=>{
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div style={{ display: "flex" }}>
            <button onClick={() => setIsPlaying(!isPlaying)}  style={{ marginLeft: "auto" }}> {!isPlaying? 'PLAY AUDIO' : 'STOP AUDIO'} </button>
            <ReactSound 
            url={moogic}
            playStatus={
                isPlaying ? ReactSound.status.PLAYING : ReactSound.status.STOPPED
            }
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
            >
            </ReactSound>
        </div>);
};

export default PlaySound;