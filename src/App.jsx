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
        setTotalPages(data.total_pages);
        if (data.total_pages === 0) {
          toast("We don't have images for this query");
        }
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
      toast.error("Please fill in the search field!");
      return;
    }
    setQuery((prevQuery) => {
      if (prevQuery === query && numberPage === 1) {
        toast.error(
          "The query is the same as the previous one. Please try a different query."
        );
      }
    });

    setQuery(query);
    setImages([]);
    setNumberPage(1);
  };

  const onLoadMoreBtn = () => {
    if (numberPage < totalPages) {
      setNumberPage((prevPage) => prevPage + 1);
    } else {
      toast("No more images to load.");
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
