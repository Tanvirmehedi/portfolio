import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cursor from "./Assets/cursor.png";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div
      style={{ cursor: `url(${cursor}),auto` }}
      className="App bg-slate-700 min-h-screen lg:flex"
    >
      <Header />
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
