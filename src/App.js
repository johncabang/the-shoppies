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
      main: "#93291E",
      dark: "#ba000d",
      contrastText: "#000",
    },
    action: {
      disabledBackground: "#bcbcbc",
      disabled: "#bcbcbc",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(to right bottom, #000, #434343)",
    backgroundImage: `url("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2840&q=80")`,
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.1)",
    color: "#014c3e",
    paddingTop: "3%",
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingBottom: "10%",
    marginRight: 0,
    position: "relative",
    overflowX: "hidden",
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
        if (response.data.Search) {
          setResults(response.data.Search.slice(0, 10));
        }
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
      <Grid container spacing={0} className={classes.root}>
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
