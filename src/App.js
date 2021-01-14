// import { useState, useEffect } from "react";
// import Results from "./components/Results";
// import SearchBar from "./components/SearchBar";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// import axios from "axios";
// import "./App.css";
// import NominateButton from "./components/NominateButton";
// import RemoveNominee from "./components/RemoveNominee";
// import Heading from "./components/Heading";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#fff",
//       main: "#fff",
//       dark: "#fff",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#ff7961",
//       main: "#f44336",
//       dark: "#ba000d",
//       contrastText: "#000",
//     },
//   },
// });

// const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);
//   const [nominees, setNominees] = useState([]);

//   useEffect(() => {
//     const testURL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;
//     axios.get(testURL).then((response) => {
//       if (response.data.Search) {
//         setResults(response.data.Search.slice(0, 8));
//       }

//       console.log(response);
//     });
//   }, [searchTerm]);

//   const nominateMovie = (movie) => {
//     const nomineeList = [...nominees, movie];
//     setNominees(nomineeList);
//   };

//   const removeNominee = (movie) => {
//     const nomineeList = nominees.filter(
//       (nominee) => nominee.imdbID !== movie.imdbID
//     );
//     setNominees(nomineeList);
//   };

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <h2>The Shoppies</h2>
//         <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//         <div className="app__results">
//           <Heading heading="Movies" />
//           <Results
//             results={results}
//             handleNominatedClick={nominateMovie}
//             nominateComponent={NominateButton}
//           />
//           <Heading heading="Nominees" />
//           <Results
//             results={nominees}
//             handleNominatedClick={removeNominee}
//             nominateComponent={RemoveNominee}
//           />
//         </div>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import Results from "./components/Results";
import NomineesList from "./components/NomineesList";

import SearchBar from "./components/SearchBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import "./App.css";
import NominateButton from "./components/NominateButton";
import RemoveNominee from "./components/RemoveNominee";
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
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

  const nominateMovie = (movie) => {
    const nomineeList = [...nominees, movie];
    setNominees(nomineeList);
  };

  const removeNominee = (movie) => {
    const nomineeList = nominees.filter(
      (nominee) => nominee.imdbID !== movie.imdbID
    );
    setNominees(nomineeList);
  };

  const classes = useStyles();

  function FormRow() {
    return (
      <>
        <Grid item xs={6}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Results
              searchTerm={searchTerm}
              results={results}
              handleNominatedClick={nominateMovie}
              nominateComponent={NominateButton}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NomineesList
              results={nominees}
              handleNominatedClick={removeNominee}
              nominateComponent={RemoveNominee}
            />
          </div>
        </Grid>
      </>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Heading heading="The Shoppies" />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={0}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
