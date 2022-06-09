import cursor from "./Assets/cursor.png";
import Header from "./components/Header";
import Main from "./components/Main";

console.log(cursor);

function App() {
  return (
    <div
      style={{ cursor: `url(${cursor}),auto` }}
      className="App bg-slate-700 min-h-screen lg:flex"
    >
      <Header />
      <Main />
    </div>
  );
}

export default App;
