import { Typography, MuiThemeProvider, CssBaseline, Button } from "@material-ui/core";
import darkTheme from "../components/Theme/darkTheme";
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

import Grid from "@material-ui/core/Grid";
// import { responsiveFontSizes } from "@mui/material";


export default function Notfound(){
    return(
        <Grid container className="Grida" justifyContent="center" alignContent="center" style={{ alignItems: "center", textAlign:"center"}} direction="column">
            {/* <Helmet>
                <title>Ritsu's | 404</title>
            </Helmet> */}
            <MuiThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Grid item style={{textAlign:"center"}}>
                    <Typography variant="h1">Cannot find that page!</Typography>
                    <Grid item style={{marginTop:"2%"}}>
                        <a href="/" style={{textDecoration:"none"}}><Button variant="outlined">Home</Button></a>
                    </Grid>
                    <Grid item style={{marginTop:"2%"}}> 
                        <Footer />
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        </Grid>
    );
}
