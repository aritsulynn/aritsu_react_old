// import logo from './logo.svg';
import "./App.css";
import { Typography, MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./components/Theme";
import Image from 'react-bootstrap/Image'
import Footer from "./components/Footer";
import Helmet from "react-helmet";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Helmet>
          <title>Ritsu's | Home</title>
        </Helmet>
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
              <Footer />
            </div>
          </div>
        </header>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
