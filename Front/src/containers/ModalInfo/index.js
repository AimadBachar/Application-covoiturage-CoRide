import {connect} from 'react-redux';
import ModalInfo from 'src/components/ModalInfo';
import {closeModal} from 'src/actions/modalInfo';

const mapStateToProps = (state) => ({
    open: state.modalInfo.open,
});

const mapDispatchToProps = (dispatch) => ({  


    onClickModal: () => {
      const action = closeModal();
      dispatch(action)
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalInfo);