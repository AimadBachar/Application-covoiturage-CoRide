// == Import : npm
import React from 'react';
//import PropTypes from 'prop-types';
import { Button, Modal, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

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
    <Modal basic open={open} className="modalPerso">     
        <h3>{header}</h3>
        <p>{message}</p>      
          <Button className="buttonModal" onClick={handleClick}>
            <Icon name='checkmark' />OK
          </Button>                 
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