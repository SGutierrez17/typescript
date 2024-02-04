import { createTheme } from '@mui/material';
import { darken } from 'polished';

const theme=createTheme({
    palette: {
        primary: {
            main: '#00796B' 
        },
        secondary: {
            main: '#FFAB00' 
        },
        error: {
            main: '#D32F2F' 
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    background:'#00796B',
                    color: '#FFFFFF',
                    '&:hover': {background: darken(0.15, '#00796B')},
                }
            }
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    bakground:'#004D40',
                    color: '#FFFFFF',
                }
            }
        },
        MuiChip:{
            styleOverrides:{
                root:{
                    backgroundColor: '#00796B',
                    color: '#FFFFFF', 
                    border: '2px solid #FFAB00', 
                    '&:hover': {background: darken(0.15,'#FFAB00')}, 
                },
                }
            }
        },
    typography: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        body1: {
            fontSize: '16px',
            textTransform: 'uppercase',
        },
    },
    },
);

export default theme;







