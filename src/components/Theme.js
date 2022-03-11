import { createTheme } from "@material-ui/core";

const theme = createTheme({
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
    }
});

export default theme;