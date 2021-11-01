import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SubmitForm = ({ handleSubmitClose, submitshow }) => {
  return (
    <div>
      <Modal show={submitshow} onHide={handleSubmitClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleSubmitClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmitClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SubmitForm;
