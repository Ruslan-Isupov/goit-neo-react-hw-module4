// import toast from "react-hot-toast";
import css from "./ErrorMessage.module.css";
const ErrorMessage = ({ message }) => {

  // toast.error(message)
  return <div className={css.error}>{message}</div>;
  
};

export default ErrorMessage;
