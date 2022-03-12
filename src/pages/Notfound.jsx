import { Typography, MuiThemeProvider, CssBaseline, Button } from "@material-ui/core";
import theme from "../components/Theme";
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
export default function Notfound(){
    return(
        <div className="Notfound">
            <Helmet>
                <title>Ritsu's | 404</title>
            </Helmet>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <div style={{textAlign:"center", paddingTop:"10%"}}>
                    <Typography variant="h1">Cannot find that page!</Typography>
                    <div style={{paddingTop: "5%"}}>
                        <a href="/" style={{textDecoration:"none"}}><Button variant="outlined">Home</Button></a>
                    </div>
                </div>
            <div style={{paddingTop: "5%"}}>
                <Footer />
            </div>
            </MuiThemeProvider>
        </div>
    );
}
