import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function Input() {
    const { filterMovies } = useContext(MovieContext);

    const handleInputChange = (e) => {
        filterMovies(e.target.value);
    };

    return (
        <InputGroup className="mb-3" style={{ paddingTop: '20px' }}>
            <InputGroup.Text id="inputGroup-sizing-default">
                <i className="bi bi-search-heart"></i>
            </InputGroup.Text>
            <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                required
                onChange={handleInputChange}
            />
        </InputGroup>
    );
}

export default Input;
