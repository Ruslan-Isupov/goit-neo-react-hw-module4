import getFetchSearch from "./components/API/api";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import css from "./App.module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [numberPage, setNumberPage] = useState(0);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  useEffect(() => {
    if (!query) return;

    const searchImages = async () => {
      try {
        setLoader(true);
        setError(false);
        const data = await getFetchSearch(query, numberPage);
        // console.log(query,numberPage)
        console.log(data.total_pages);
        setTotalPages(data.total_pages);

        setImages((prevState) => {
          return [...prevState, ...data.results];
        });
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    searchImages();
  }, [query, numberPage]);

  const handleSearch = (query) => {
    if (!query.trim()) {
      console.log("Please fill");
      toast.error("Please fill in the search field!");
      return;
    }
    setQuery(query);
    setImages([]);
    setNumberPage(1);
    // setShowToastContainer(true);
  };

  const onLoadMoreBtn = () => {
    if (numberPage < totalPages) {
      // if (page < totalPages) {
      setNumberPage((prevPage) => prevPage + 1);
    } else {
      toast.info("No more images to load.");
      // console.log("No more images to load.");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar handleSearch={handleSearch} />
      <div className={css.container}>
        {error && <ErrorMessage message={error} />}
        <ImageGallery images={images} onImageClick={openModal} />
        {loader && <Loader />}
        {images.length > 0 && numberPage < totalPages && !loader && (
          <LoadMoreBtn onLoadMoreBtn={onLoadMoreBtn} />
        )}

        {selectedImage && (
          <ImageModal modalImg={selectedImage} onClose={closeModal} />
        )}
      </div>
    </>
  );
};
// }
export default App;
