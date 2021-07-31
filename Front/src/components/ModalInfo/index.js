import React from 'react';
import {
    Button,
    Modal
} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'

const ModalInfo = ({
    open,
    header,
    message,
    onClickModal
}) => {

    const handleClick = (event)=>{
        event.preventDefault();
        onClickModal();
    }

    return (
    <Modal size="mini" open={open}>
        <Modal.Header>{header}</Modal.Header>
        <Modal.Content><p>{message}</p></Modal.Content>
        <Modal.Actions>
            <Button onClick={handleClick}>OK</Button>
        </Modal.Actions>
    </Modal>
    )
};

export default ModalInfo;