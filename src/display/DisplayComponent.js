import Input from '../input/Input.js';
import Cards from '../card/Card.js';
import Container from 'react-bootstrap/Container';
import './Display.css';
import { useState, useEffect } from 'react';

function Display(){
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        getAllMovies();
      }, []);

    async function getAllMovies(){
        await fetch('https://ghibliapi.vercel.app/films')
        .then(response => {
            if (!response.ok) {
            throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(data => {
            setAllMovies(data);
            setFilteredMovies(data); 
        })
        .catch(error => {
            console.error('Houve um erro:', error);
        });
    }

    function filterMovies(term){
        filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(term).toLowerCase());
        setFilteredMovies(filteredMovies);
    }

    return (
    <Container className="container-display">
        <Input></Input>
        <Cards movies={filteredMovies}></Cards>
    </Container>
    );

}

export default Display;