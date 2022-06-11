import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cursor from "./Assets/cursor.png";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div
      style={{ cursor: `url(${cursor}),auto` }}
      className="App bg-slate-700 min-h-screen lg:flex relative"
    >
      <Header />
      <Main />
      <ToastContainer />
      {/* <ScrollTop /> */}
    </div>
  );
}

export default App;
