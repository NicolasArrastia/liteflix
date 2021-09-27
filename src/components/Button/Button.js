import React from 'react'

// Styles
import './button.css'

export default function Button(props) {
    const style = props.buttonStyle;
    const text = props.text;

    return (
        <div className={"button " + (style===1?'button--secondary':'')}>
            {
                (style)?
                <span className="plus-icon"></span>
                :
                <img src="./img/play.svg" alt="icon"/>
            }
            <span>{text}</span>
        </div>
    )

}
