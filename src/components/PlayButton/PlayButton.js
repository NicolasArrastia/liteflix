import React from 'react'

// Styles
import './playButton.css'

export default function PlayButton() {

    const play = () => {
        console.log('play')
    }

    return (
        <div onClick={play} className="play-button">
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6484 8.27005L1 1V15L11.6484 8.27005Z"/>
            </svg>
        </div>
    )
}
