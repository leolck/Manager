import React from 'react';
import Modal from 'react-modal'

const SelectedModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedChoice}
            onRequestClose={props.clearSelectedChoice}
            contentLabel='Selected Option'
            closeTimeoutMS={200}
        >
        <h3>Selected Option</h3>
        <button onClick={props.clearSelectedOption}>Close</button>
        </Modal>
    </div>
);