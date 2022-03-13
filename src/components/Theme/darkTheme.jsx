import { createTheme } from "@material-ui/core";


const darkTheme = createTheme({
  palette: {
      background: {
        default: "#222222"
      },
      text: {
        primary: "#ffffff"
      }
    },
  typography: {
    fontFamily: "Josefin Sans",
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: "black!important",
      }
    }
  }

});


export default darkTheme;