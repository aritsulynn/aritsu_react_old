// import logo from './logo.svg';
import "./App.css";
import { Typography, MuiThemeProvider, CssBaseline } from "@material-ui/core";

// import Theme from "./components/Theme";
import Footer from "./components/Footer";
import Helmet from "react-helmet";
import React  from "react";
// import theme
import { darkTheme } from "./components/Theme/darkTheme";
// import { lightTheme } from "./components/Theme/lightTheme";
import { Grid } from "@material-ui/core";

function App() {
  return (
    // 
    <Grid container className="Grida" justifyContent="center" alignContent="center" style={{ alignItems: "center", textAlign:"center"}} direction="column">
      <MuiThemeProvider theme={darkTheme}>
        <Helmet>
          <title>Ritsu's | Home</title>
        </Helmet>
        <CssBaseline />
        <Grid>
          <img src="https://i.pinimg.com/564x/c7/b7/b2/c7b7b2a5dab1d84689961d8fc11ca2e8.jpg" className="img img-fluid" alt="Responsive image" />
          <Typography variant="h1" style={{marginTop:"5%" }} >Ritsu's</Typography>
          <Footer />  
        </Grid>
      </MuiThemeProvider>
    </Grid>    
  );
}

export default App;
