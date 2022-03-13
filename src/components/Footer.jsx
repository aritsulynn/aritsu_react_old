import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'
import {Grid, MuiThemeProvider} from  '@material-ui/core';
import Link from '@mui/material/Link';

import Button from '@mui/material/Button';
export default function footer(){
    
    return(
        // <Grid alignContent='center' justifyContent='center'>
        <Grid container spacing= {2} className="footer" justifyContent="center" alignContent="center" style={{ alignItems: "center", textAlign:"center"}}>
        <Grid item>
            <Link href="mailto:lynniswaifu@gmail.com" ><i className='bi bi-envelope'></i></Link>
        </Grid>    
        <Grid item>
            <Link href="https://discord.gg/jZSSD4qtSk"><i className="bi bi-discord"></i></Link>
        </Grid>
        <Grid item>
            <Link href="https://www.facebook.com/lynniswaifu/"><i className="bi bi-facebook"></i></Link>
        </Grid>
        <Grid item>
            <Link href="https://www.instagram.com/uandlynn/"><i className="bi bi-instagram"></i></Link>
        </Grid>
        <Grid item>
            <Link href="https://twitter.com/UandLynn"><i className="bi bi-twitter"></i></Link>
        </Grid>
        <Grid item>
            <Link href="https://github.com/lynniswaifu"><i className="bi bi-github"></i></Link>
        </Grid>
        </Grid>
    );
}