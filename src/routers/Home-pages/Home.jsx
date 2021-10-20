import React from 'react'
import Center from '../../components/Center/Center'
import Contact from '../../components/Contact/Contact'
import Header from '../../components/Header/Header'
import Siadbar from '../../components/Siadbar/Siadbar'
import './Home.css'
function Home() {
    return (
        <div>
            <div className="homeDiv">
                <Header />
                <div className="home-wrapper">
                    <Siadbar />
                    <Center />
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Home


