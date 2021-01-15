import { useState, useEffect } from "react";
import Results from "./components/Results";
import NomineesList from "./components/NomineesList";

import SearchBar from "./components/SearchBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import Heading from "./components/Heading";

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
    action: {
      disabledBackground: "#302A2E",
      disabled: "#302A2E",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#121212",
    color: "#fff",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
}));

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominees, setNominees] = useState([]);

  useEffect(() => {
    const testURL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;
    axios.get(testURL).then((response) => {
      if (response.data.Search) {
        setResults(response.data.Search.slice(0, 8));
      }

      console.log(response);
    });
  }, [searchTerm]);

  // add nominee
  const nominateMovie = (movie) => {
    const nomineeList = [...nominees, movie];
    setNominees(nomineeList);
  };

  // remove nominee
  const removeNominee = (movie) => {
    const nomineeList = nominees.filter(
      (nominee) => nominee.imdbID !== movie.imdbID
    );
    setNominees(nomineeList);
  };

  const classes = useStyles();

  function FormRow() {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6}>
          <Results
            searchTerm={searchTerm}
            results={results}
            handleNominatedClick={nominateMovie}
            nominees={nominees}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <NomineesList
            results={nominees}
            handleNominatedClick={removeNominee}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Heading heading="The Shoppies" />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FormRow />
      </div>
    </ThemeProvider>
  );
}

export default App;
