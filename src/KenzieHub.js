import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./Routes";
import GlobalStyle from "./styles/global";

export default function KenzieHub() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </BrowserRouter>
  );
}
