import React from 'react';
import Modal from 'react-modal';

const Spinner = () => {
  const styles = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.80)'
    },
    content : {
      display                    : 'block',
      position                   : 'absolute',
      width                      : '100px',
      height                     : '100px',
      margin                     : 'auto',
      border                     : '1px solid #ccc',
      background                 : '#fff',
      overflow                   : 'hidden',
      WebkitOverflowScrolling    : 'none',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px'
    }
  };
  Modal.setAppElement('#root');
  return(
    <Modal
      isOpen={ true }
      contentLabel="Modal"
      style={ styles }>
        <section className="spinner">
          <div id="loader">
            <div id="box"></div>
            <div id="hill"></div>
          </div>
        </section>
    </Modal>
  );
};

export default Spinner;
