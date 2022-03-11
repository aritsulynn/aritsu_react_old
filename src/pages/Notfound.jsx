import { Typography, MuiThemeProvider, CssBaseline, Button } from "@material-ui/core";
import theme from "../components/Theme";

export default function Notfound(){
    return(
        <div className="Notfound">
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <div style={{textAlign:"center", marginTop:"5%"}}>
                    <Typography variant="h4">Cannot find that page!</Typography>
                    <div style={{marginTop: "3%"}}>
                        <a href="/" style={{textDecoration:"none"}}><Button variant="outlined">Home</Button></a>
                    </div>
                </div>
            </MuiThemeProvider>
        </div>
    );
}
