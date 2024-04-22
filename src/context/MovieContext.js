// src/context/MovieContext.js
import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch('https://ghibliapi.vercel.app/films')
            .then(response => response.json())
            .then(data => {
                setAllMovies(data);
                setFilteredMovies(data);
            })
            .catch(error => console.error('Houve um erro:', error));
    }, []);

    const filterMovies = (term) => {
        const filtered = allMovies.filter(movie =>
            movie.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredMovies(filtered);
        setModal(filtered.length === 0 && term.trim() !== '');
    };

    return (
        <MovieContext.Provider value={{
            allMovies,
            filteredMovies,
            modal,
            setModal,
            filterMovies
        }}>
            {children}
        </MovieContext.Provider>
    );
};
