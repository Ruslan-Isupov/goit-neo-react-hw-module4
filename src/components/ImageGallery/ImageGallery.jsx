import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <>
      <ul className={css.gallery}>
        {images.map((image) => {
          return (
            <li key={image.id} className={css.galleryItem}>
              <ImageCard
                key={image.id}
                // openModal={() => {
                //   this.openModal(image.id);
                // }}

                // smallImg={image.webformatURL}
                onClick={() => onImageClick(image)}
                photo={image}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ImageGallery;