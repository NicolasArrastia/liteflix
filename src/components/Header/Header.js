import React from 'react'

// Components
import Liteflix from '../Liteflix/Liteflix'
import AddMovie from '../AddMovie/AddMovie.js'
import Menu from '../Menu/Menu'
import Notifications from '../Notifications/Notifications'
import Profile from '../Profile/Profile'

// Styles
import './header.css'

export default function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <Liteflix></Liteflix>
                <AddMovie></AddMovie>
                <Menu></Menu>
                <Notifications></Notifications>
                <Profile></Profile>
            </nav>
        </header>
    )
}


// import React, { Component } from 'react'

// // Components
// // import Liteflix from '../Liteflix/Liteflix.js'
// // import AddMovie from '../AddMovie/AddMovie.js'

// // Styles
// // import './header.css'

// export default class Header extends Component {

//     togglePopUp(){
//         const popUp = document.getElementById('pop-up');
//         popUp.classList.toggle('pop-up--active');
//     }

//     render() {
//         return (
//             <header className="header">
//                 <nav className="header__nav">
//                     <span className="liteflix-logo">
//                         <span>Lite</span>
//                         <span>flix</span>
//                     </span>
//                     <span onClick={this.togglePopUp} className="add-movie">
//                         <span className="plus-icon"></span>
//                         <span className="add-movie__text">añadir película</span>
//                     </span>
//                     <span className="menu-icon">
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                     </span>
//                     <span>
//                         <img src="img/profile_picture.png" alt="profile"/>
//                     </span>
//                 </nav>
//             </header>
//         )
//     }
// }
