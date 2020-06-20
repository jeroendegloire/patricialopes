import React from 'react'
import ReactPlayer from 'react-player'
import { FaPlay } from 'react-icons/fa'

const Video = ({ url, posterImage }) => {
    return (
        <div className='mx-auto flex items-center flex-wrap rounded'>
            <ReactPlayer
                url={url}
                width='100%'
                height='800px'
                playing
                playIcon={<button><span className='sr-only'>Play</span><FaPlay size='60' color='white' /></button>}
                light={posterImage.asset.url}
            />
        </div>
    )
}

export default Video
