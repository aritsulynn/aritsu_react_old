import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'
import {Grid} from  '@material-ui/core';

export default function footer(){
    return(
        <Grid container alignContent='center' justifyContent='center' style={{paddingTop: "2%"}}>
                <a href="mailto:lynniswaifu@gmail.com"><i class="bi bi-envelope"></i></a>
                <a href="https://discord.gg/jZSSD4qtSk"><i class="bi bi-discord"></i></a>
                <a href="https://www.facebook.com/lynniswaifu/"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/uandlynn/"><i class="bi bi-instagram"></i></a>
                <a href="https://twitter.com/UandLynn"><i class="bi bi-twitter"></i></a>
                <a href="https://github.com/lynniswaifu"><i class="bi bi-github"></i></a>
        </Grid>
    );
}