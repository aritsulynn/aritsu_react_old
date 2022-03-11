// import logo from './logo.svg';
import "./App.css";
import { Typography, MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./components/Theme";
import { blue, grey } from '@mui/material/colors';
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <header className="App-header">
          <div style={{ textAlign: "center"}} className = "venpls">
            <div>
              <Typography variant="h2">Ritsu's</Typography>
            </div>
            <div>
              {/* <Typography variant="h1">This is gendary!</Typography> */}
              <Image src="https://i.pinimg.com/564x/c7/b7/b2/c7b7b2a5dab1d84689961d8fc11ca2e8.jpg" className="img img-fluid" alt="Responsive image" />
            </div>
            <div className="icon">
              <a href="mailto:lynniswaifu@gmail.com"><EmailIcon fontSize="large" sx={{ color: grey[50] }} /></a>
              <a href="https://github.com/lynniswaifu"><GitHubIcon fontSize="large" sx={{ color: grey[50] }} /></a>
              <a href="https://twitter.com/UandLynn"><TwitterIcon fontSize="large" sx={{  color: grey[50] }} /></a>
              {/* <a href=""><GitHubIcon color="white" sx={{ fontSize: 40 }} /></a> */}
            </div>
          </div>
        </header>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
