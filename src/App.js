import { useState, useEffect } from "react";
import Nominations from "./components/Nominations";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import axios from "axios";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const testURL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;
    axios.get(testURL).then((response) => {
      if (response.data.Search) {
        setResults(response.data.Search.slice(0, 8));
      }

      console.log(response);
    });
  }, [searchTerm]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <h2>The Shoppies</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Results results={results} />
        <Nominations />
      </ThemeProvider>
    </>
  );
}

export default App;
