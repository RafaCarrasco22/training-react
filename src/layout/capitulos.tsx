import React, { useState, useEffect }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Cookies from 'universal-cookie';
import HeaderCookie from './head-index';
import SearchApi from '../services/bbService';
import ImgCard from '../components/card';
import ReactPaginate from 'react-paginate';
import StickyHeadTable from '../components/table';

interface Episode {
  title: string;
    episode_id: string;
    season: string;
    air_date: string;
    characters: any;
    episode: string;
  }

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

export default function Capitulos() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [dataEpisode, setDataEpisode] = useState<null | Episode[]>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);



  useEffect(() => {
    const fetchData = async () => {
      const data = await SearchApi.searchEpisodes();
      setDataEpisode(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  return (
    <React.Fragment>
      <CssBaseline />
        <HeaderCookie></HeaderCookie>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Breaking Bad
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Listado de Capítulos de la Serie                
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          {/* <FormRow></FormRow> */}
          <Grid container item xs={12} spacing={3}>
                <StickyHeadTable />
              </Grid>
          
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}