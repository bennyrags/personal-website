import React, { Component } from 'react';
import './Splash.css'
class Splash extends Component {


    render() {
        return(
            <main className='splashInfoContainer'>
                <h1>Hi, I'm Ben</h1>
                <h1>I'm a Full Stack Software Engineer</h1>
                <h3><a href='mailto:ben.ragsdale@gmail.com?subject=Hello!'>Holla!</a></h3>
            </main>
        )
    }
}

export default Splash;