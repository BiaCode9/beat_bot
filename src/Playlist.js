import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom"

const Playlist = () => {
  return (
    <h1>*** Playlist Will Go Here ***

      {/* // if local storage, display results
    // if empty display user message
    // refer to ternary condition for songs.length */}


      {/* {track.map(track =>
            <Playlist
              key={response.data.results.trackmatches.track}
              track={track}
            />
          )} */}


    </h1>
  )
}

export default withRouter(Playlist);