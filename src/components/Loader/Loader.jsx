import { Circles } from 'react-loader-spinner'
import css from './Loader.module.css';

function Loader() {
    return (
        <div className={css.loader}>
            <Circles
  height="60"
  width="60"
  color="#4d56a9"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
        </div>
    );
}

export default Loader;