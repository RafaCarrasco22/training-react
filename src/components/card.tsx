import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SearchApi from "../services/bbService";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

type Props = {
  name: string;
  endpoint: string;
  img: string;
};

interface PersonajeData {
  char_id: number;
  name: string;
  birthday: string;
  occupation: any;
  img: string;
  status: string;
  nickname: string;
  appearance: any;
  portrayed: string;
  category: string;
  better_call_saul_appearance: any;
}

export default function ImgCard(props: Props) {
  const { name, endpoint, img } = props;
  const classes = useStyles();
  const [dataCharacter, setDataCharacter] = useState<null | PersonajeData>(null);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await SearchApi.searchCharacter(endpoint);
      setDataCharacter(data);
    };

    fetchData();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          {dataCharacter ? (
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="350"
              image={img}
              title="Contemplative Reptile"
            />
          ) : null}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpen}>
            Ver Info
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
