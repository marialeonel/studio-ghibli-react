import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Input({onSearchTermChange}){
    const handleInputChange = (e) => {
        const newTerm = e.target.value;
        onSearchTermChange(newTerm);
      };
    return (
        <InputGroup className="mb-3" style={{paddingTop: '20px'}} onChange={handleInputChange}>
            <InputGroup.Text id="inputGroup-sizing-default">
            <i class="bi bi-search-heart"></i>
            </InputGroup.Text>
            <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            required
            />
        </InputGroup>
    );
}

export default Input;