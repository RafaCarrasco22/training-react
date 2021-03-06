import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useForm } from 'react-hook-form';

import md5 from 'md5';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        byRafaa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://wallpapercave.com/wp/wp6892023.jpg)',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



type Inputs = {
    username: string,
    password: string,
  };

export default function SignInSide(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit = (data:any) => iniciarSesion(data);
    console.log(watch("username"));
     

  const classes = useStyles();


  const iniciarSesion = async (data:any) => {
      console.log(data.username);
      console.log(data.password);

      await axios.get(baseUrl, {params: {username: data.username, password: md5(data.password)}})
      .then(response=>{
        return response.data;
    })
    .then(response=>{
        if(response.length>0){
            var respuesta=response[0];
            cookies.set('id', respuesta.id, {path: "/"});
            cookies.set('apPaterno', respuesta.apPaterno, {path: "/"});
            cookies.set('nombre', respuesta.nombre, {path: "/"});
            cookies.set('username', respuesta.username, {path: "/"});
            alert(`Bienvenido ${respuesta.nombre} ${respuesta.apPaterno}`);
            window.location.href="./inicio";
        }else{
            alert('El usuario o la contraseña no son correctos');
        }
    })
    .catch(error=>{
        console.log(error);
    })
  }
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <form onSubmit={handleSubmit(onSubmit)}>

          
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            
            <input defaultValue="Username" {...register("username")}/> 
            <input type="password" defaultValue="Password" {...register("password")} required/>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
                <Box mt={5}>
                <Copyright />
                </Box>
        </div>
        </form>
      </Grid>
    </Grid>
  );
}