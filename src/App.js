import "./App.css";
import Nominations from "./components/Nominations";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <h2>The Shoppies</h2>
      <SearchBar />
      <Nominations />
      <Results />
    </>
  );
}

export default App;
