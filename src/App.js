import { useState, useEffect } from "react";

// import Heading from "./components/Heading";
// import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Hero from "./components/Hero";
import NomineesList from "./components/NomineesList";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import axios from "axios";
import Banner from "./components/Banner";

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
    background: "#FAF7ED",
    color: "#014C3E",
    paddingTop: "3%",
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingBottom: "10%",
    marginRight: 0,
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
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {nominees.length === 5 ? <Banner /> : <h3> </h3>}
      <FormRow />
    </ThemeProvider>
  );
}

export default App;
