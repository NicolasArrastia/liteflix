import React, {useEffect, useState} from 'react'

// Styles
import './loading.css'

export default function Loading(props) {
    const [counter, setCounter] = useState (0);
    const [finished,setFinished] = useState (0);
    const isErr = props.isError;
    const loadedText='';
    
    // (isErr)?loadedText='Reintentar':loadedText='¡Listo!';

    useEffect(() => {
        const timeout = setTimeout(()=>{
            setCounter( counter + 1 );

        },10)
        if(counter>99){
            setFinished(1)
            clearTimeout(timeout)
        }
    },[counter])

    return (

        <div id="loading-container" className="loading-container">
            <span>Cargando %{counter}</span>
            <div className="loading-bar">
                <div id="progress_bar" className={"loading-bar__progress "+(isErr?'loading-bar__error':'')}></div>
            </div>
            <span className="loading-text">
                {(finished)?
                <span>{(isErr)?<span className="loading-text__error">Reintentar</span>:<span className="loading-text__success">¡Listo!</span>}</span>
                :
                <span>cancelar</span>
                }
                {/* {finished?<span className={(isErr?"loading-container__error":"loading-container__finished")}>{loadedText}</span>:<span>cancelar</span>}</span> */}
            </span>
        </div>
    )
}
