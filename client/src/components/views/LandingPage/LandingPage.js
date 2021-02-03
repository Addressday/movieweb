import React from 'react'
import MovieSearch from '../SearchPage/MovieSearch';

function LandingPage() {

  
    // const handleScroll = () => {
    //     const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    //     const body = document.body;
    //     const html = document.documentElement;
    //     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    //     const windowBottom = windowHeight + window.pageYOffset;
    //     if (windowBottom >= docHeight - 1) {

    //         // loadMoreItems()
    //         console.log('clicked')
    //         buttonRef.current.click();

    //     }
    // }

    return (
        <div style={{ width: '100%', margin: '0' }}>

            <MovieSearch />

             

        </div>
    )
}

export default LandingPage
