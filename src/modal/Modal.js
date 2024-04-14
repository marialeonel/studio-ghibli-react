import Modal from 'react-bootstrap/Modal';

function ModalHandler({ show, onHide}) {
  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>The term you typed doesn't exist, type a valid term!</Modal.Body>
    </Modal>
  );
}

export default ModalHandler;