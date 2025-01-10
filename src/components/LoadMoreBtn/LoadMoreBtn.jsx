import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onLoadMoreBtn }) => {
  return (
    <button
      type="button"
      className={css.buttonPagination}
      onClick={onLoadMoreBtn}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
