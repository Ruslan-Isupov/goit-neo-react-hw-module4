import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ modalImg, onClose }) => {
  return (
    <Modal
      isOpen={!!modalImg}
      onRequestClose={onClose}
      className={css.modalContent}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      {modalImg && (
        <img
          src={modalImg.urls.regular}
          alt={modalImg.description}
          className={css.modalImage}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
