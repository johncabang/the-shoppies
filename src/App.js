import { useState, useEffect } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Banner from "./components/Banner";
import Hero from "./components/Hero";
import NomineesList from "./components/NomineesList";
import Results from "./components/Results";

import axios from "axios";

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
      disabledBackground: "#000",
      disabled: "#000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000",
    color: "#014C3E",
    paddingTop: "3%",
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingBottom: "10%",
    marginRight: 0,
    position: "relative",
  },
}));

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominees, setNominees] = useState([]);

  useEffect(() => {
    const testURL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;
    axios
      .get(testURL)
      .then((response) => {
        setResults(response.data.Search.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
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
      <Grid container spacing={4} className={classes.root}>
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
      {nominees.length === 5 && <Banner />}
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FormRow />
    </ThemeProvider>
  );
}

export default App;
