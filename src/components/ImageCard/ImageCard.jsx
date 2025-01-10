import css from "./ImageCard.module.css";

const ImageCard = ({ photo, onClick }) => {
  return (
    <div className={css.galleryBox}>
      <img
        src={photo.urls.small}
        alt={photo.description}
        className={css.galleryCard}
        onClick={onClick}
      />
    </div>
  );
};
export default ImageCard;