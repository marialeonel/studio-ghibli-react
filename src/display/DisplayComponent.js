import Input from '../input/Input.js';
//import Cards from '../card/Card.js';
import Container from 'react-bootstrap/Container';
import './Display.css';
import React, { useState, useEffect, Suspense } from 'react';
import Modal from '../modal/Modal.js';
import Spinner from 'react-bootstrap/Spinner';

const Cards = React.lazy(() => delayForDemo(import('../card/Card.js')));

function Display(){
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [modal, setModal] = useState(false);

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

    function handleSearchTermChange(newTerm){
        filterMovies(newTerm);
    }

    function filterMovies(term){
        const filtered = allMovies.filter(movie => movie.title.toLowerCase().includes(term.toLowerCase()));
        setFilteredMovies(filtered);
        if (filtered.length === 0 && term.trim() !== '') {
            setModal(true);
        } else {
            setModal(false);
        }
        
    }

    return (
    <Container className="container-display">
        <Input onSearchTermChange={handleSearchTermChange}></Input>
        <Suspense fallback={
                <div style={{ textAlign: 'center', margin: '20px' }}>
                    <Spinner animation="border" role="status">
                    </Spinner>
                </div>
            }>
            <Cards movies={filteredMovies} />
        </Suspense>
        <Modal show={modal} onHide={() => setModal(false)}></Modal>
    </Container>
    );

}

function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 1500);
    }).then(() => promise);
  }
  

export default Display;