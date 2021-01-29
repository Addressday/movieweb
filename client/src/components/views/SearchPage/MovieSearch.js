import React , {useState} from 'react'
import './moviesearch.css'
import {API_KEY, API_URL, IMAGE_BASE_URL} from '../../Config';
import { Row } from 'antd';
import GridCards from '../../commons/GridCards'

export default function MovieSearch() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const movieSearch = async (e) => {
        e.preventDefault();

        const url = `${API_URL}search/movie?query=${query}&api_key=${API_KEY}`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results)
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form className="form" onSubmit={movieSearch}>
            <input className="input" type="text" name="query"
                   placeholder="i.e. Jurassic Park"
                   value={query} onChange={(e) => setQuery(e.target.value)}
                   />
            <button className="button" type="submit">Search</button>       
        </form>
        <Row gutter={[16, 16]} >

                    {movies && movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCards
                                landingpage
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}



                </Row>
                </div>
                
        </>
    )
}
