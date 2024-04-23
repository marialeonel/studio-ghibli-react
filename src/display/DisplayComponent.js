import React, { useContext, Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { MovieContext } from '../context/MovieContext';
import Input from '../input/Input.js';
import Modal from '../modal/Modal.js';
import './Display.css';

const Cards = React.lazy(() => delayForDemo(import('../card/Card.js')));

function Display() {
    const { filteredMovies, modal, setModal } = useContext(MovieContext);

    return (
        <Container className="container-display">
            <Input />
            <Suspense fallback={
                <div style={{ textAlign: 'center', margin: '20px' }}>
                    <Spinner animation="border" role="status" />
                </div>
            }>
                <Cards movies={filteredMovies} />
            </Suspense>
            <Modal show={modal} onHide={() => setModal(false)} />
        </Container>
    );
}

function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}

export default Display;
