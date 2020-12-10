import React from 'react';
import "./Home.css";

function Home() {
    return (
        <div className = "home">
            <h1>Home component</h1>
            <div className = "home__container">
                <img className ="home__image" src ="/images/blueGrade.jpg" alt =""/>
            </div>
        </div>
    )
}

export default Home
