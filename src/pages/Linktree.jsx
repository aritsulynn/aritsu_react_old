import { Helmet } from 'react-helmet';
import theme from "../components/Theme";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import "../App.css"
import{
  CssBaseline,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";

export default function Linktree() {
  return (
    <div className="App">
      <Helmet>
        <title>Ritsu's | Linktree</title>
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="text-center" style={{ paddingTop:"5%" }}>
          <img
            class="rounded-circle img-fluid"
            src="https://i.imgur.com/QvuA6Lp.jpg"
            alt=""
            width="300"
            height="150"
          />
        </div>

        <div class="text-center" style={{  color: "white", marginTop: "2%"}}>
          <Typography variant="h3">
            Ritsu's Linktree
          </Typography>
          <Typography variant="subtitle1" style={{paddingLeft: "2%", paddingRight :"2%"}}>
            Hi, I'm Lynn who love anime and manga for along time! if you mind to be friends about that feel free to contact me!
          </Typography>
        </div>
        <div className='icon'>
          <Footer />
        </div>
        
      </MuiThemeProvider>
    </div>
  );
}
