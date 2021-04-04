import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function HeaderCookie() {
  const classes = useStyles();

  const cerrarSesion=()=>{
    cookies.remove('id', {path: "/"});
    cookies.remove('apellido_paterno', {path: "/"});
    cookies.remove('apellido_materno', {path: "/"});
    cookies.remove('nombre', {path: "/"});
    cookies.remove('username', {path: "/"});
    window.location.href='./';
}
const imageClick = () => {
    window.location.href='./inicio';
  } 

  return (
      <AppBar position="relative" color="transparent">
        <Toolbar>
       
        <img src="https://img.icons8.com/ios/452/breaking-bad.png" width="3%" onClick={() => imageClick()}/>
                    
          
          <Button
                variant="contained"
                color="secondary" onClick={()=>cerrarSesion()}>Cerrar Sesión</Button>
        </Toolbar>
        
      </AppBar>
  );
}