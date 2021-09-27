import React, {useEffect} from 'react'

// Styles
import './loading.css'

export default function Loading() {

    useEffect(() => {
        console.log('use')
    },[])

    return (

        <div id="loading-container" className="loading-container">
            <span>Loading</span>
            <div className="loading-bar">
                <div id="progress_bar" className="loading-bar__progress"></div>
            </div>

        </div>
    )
}
