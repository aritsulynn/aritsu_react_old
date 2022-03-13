import { createTheme } from "@material-ui/core";


const lightTheme = createTheme({
  palette: {
      background: {
        default: "white"
      },
      text: {
        primary: "#222222"
      }
    },
  typography: {
    fontFamily: "Josefin Sans",
  },
  components:{
    MuiLink: {
        styleOverrides: {
            root: {
                color: "black!important",
            }
        }
      },
  }
});

lightTheme.overrides = {
}


export default lightTheme;