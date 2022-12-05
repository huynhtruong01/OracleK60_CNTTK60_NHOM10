import React from 'react'
import StoriesNews from '../../features/Home/components/StoriesNews'
import TopNews from '../../features/Home/components/TopNews'
import './Main.css'

Main.propTypes = {}

function Main() {
    return (
        <main id="main">
            <div className="container">
                <TopNews />
                <StoriesNews />
            </div>
        </main>
    )
}

export default Main
