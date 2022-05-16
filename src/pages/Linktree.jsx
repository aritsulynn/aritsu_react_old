import { Helmet } from 'react-helmet';
import darkTheme  from "../components/Theme/darkTheme";
import Footer from '../components/Footer';
import "../App.css"
import{
  CssBaseline,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";

export default function Linktree() {
  return (
    <Grid container className="Grida"justifyContent="center" alignContent="center" style={{ alignItems: "center", textAlign:"center"}} direction="column">
      {/* <Helmet>
        <title>Ritsu's | Linktree</title>
      </Helmet> */}
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Grid item className="text-center">
          <img
            class="rounded-circle img-fluid"
            src="https://i.imgur.com/QvuA6Lp.jpg"
            alt=""
            width="300"
            height="150"
          />
        </Grid>

        <Grid item class="text-center" style={{  color: "white", marginTop: "2%"}}>
          <Typography variant='h3'>
            Ritsu's Linktree
          </Typography>
          <Typography variant="subtitle1" style={{paddingLeft: "2%", paddingRight :"2%"}}>
            Hi, I'm Lynn who love anime and manga for along time! if you mind to be friends about that feel free to contact me!
          </Typography>
          <Footer />
        </Grid>
      </MuiThemeProvider>
    </Grid>
  );
}
