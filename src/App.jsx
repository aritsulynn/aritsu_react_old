// import logo from './logo.svg';
import "./App.css";
import { Typography, MuiThemeProvider, CssBaseline, Switch } from "@material-ui/core";

// import Theme from "./components/Theme";
import Footer from "./components/Footer";
import Helmet from "react-helmet";
import React, {useState}  from "react";
// import theme
import darkTheme from "./components/Theme/darkTheme";
import lightTheme  from "./components/Theme/lightTheme";
// import { lightTheme } from "./components/Theme/lightTheme";
import { Grid } from "@material-ui/core";

function App() {
  const [theme, setDarkMode] = useState(true);

  return (
    <MuiThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Grid container className="Grida" justifyContent="center" alignContent="center" style={{ alignItems: "center", textAlign:"center"}} direction="column">
        <Helmet>
          <title>Ritsu's | Home</title>
          <meta name="description" content="Ritsu's Home. :)" />
        </Helmet>
        <CssBaseline />
        <Grid item>
          <img src="https://i.pinimg.com/564x/c7/b7/b2/c7b7b2a5dab1d84689961d8fc11ca2e8.jpg" className="img img-fluid" alt="Responsive image" width="60%"/>
        </Grid>
        <Grid item style={{marginTop:"1%"}}>
          <Typography variant="h2" >Ritsu's</Typography>
        </Grid>
        <Grid item>
          {/* <Switch checked={theme} onChange={() => setDarkMode(!theme)}></Switch> */}
        </Grid>
        <Grid item>
          <Footer />
        </Grid>  
      </Grid> 
    </MuiThemeProvider>
  );
}

export default App;
