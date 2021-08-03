// == Import : npm
import React from 'react';
//import PropTypes from 'prop-types';
import { Button, Modal, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// == Composant
const ModalInfo = ({
    open,
    header,
    message,
    onClickModal
}) => {
  const handleClick = (event)=>{
    event.preventDefault();
    onClickModal();
  };

  return (
    <Modal basic size="mini" open={open}>     
        <Modal.Header>{header}</Modal.Header>
        <Modal.Content><p>{message}</p></Modal.Content>
        <Modal.Actions>
          <Button color="orange" onClick={handleClick}>
            <Icon name='checkmark' />OK
          </Button>          
        </Modal.Actions>       
    </Modal>
  )
};
/*
ModalInfo.propTypes = {
    open: propTypes.string
    header:  propTypes.string
    message:  propTypes.string,
    onClickModal:  propTypes.func.isRequired,
}*/

// == Export
export default ModalInfo;