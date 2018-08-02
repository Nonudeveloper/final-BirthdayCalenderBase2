import React from 'react'
import {  Button, Modal } from 'react-bootstrap'


const Confirm = ({message, onOkay, onCancel}) => (
    <div className="static-modal">
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Alert</Modal.Title>
            </Modal.Header>

            <Modal.Body>{message}</Modal.Body>

            <Modal.Footer>
                <Button onClick={onCancel}>Cancel</Button>
                <Button bsStyle="primary" onClick={onOkay}>Okay</Button>
            </Modal.Footer>
        </Modal.Dialog>
    </div>
);

export default Confirm;