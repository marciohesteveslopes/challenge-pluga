import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Toolbar,
  AppBar,
  TextField,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { toFirstCharUppercase } from "../helpers";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
}));

const Ferramentas = (props) => {
  const classes = useStyles();
  const {history} = props;
  const [ferramentaData, setFerramentaData] = useState();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get(`https://pluga.co/ferramentas_search.json`)
      .then(function (response) {
        const { data } = response;
        const newFerramentaData = {};
        data.forEach((ferramenta, index) => {
          newFerramentaData[index + 1] = {
            app_id: index + 1,
            name: ferramenta.name,
            sprite: `https://s3-sa-east-1.amazonaws.com/pluga.co/apps/icons/${index+1}/${index+1}-icon.svg`,
          };
        });
        setFerramentaData(newFerramentaData);
      });
  }, []);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const getFerramentaCard = (ferramentaId) => {
    const { app_id, name, sprite } = ferramentaData[ferramentaId];
    return (
      <Grid item xs={4} key={ferramentaId}>
        <Card onClick={() => history.push(`/${app_id}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${app_id}. ${toFirstCharUppercase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              onChange={handleSearchChange}
              label="Ferramenta"
              variant="standard"
            />
          </div>
        </Toolbar>
      </AppBar>
      {ferramentaData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(ferramentaData).map(
            (ferramentaId) =>
              ferramentaData[ferramentaId].name.includes(filter) &&
              getFerramentaCard(ferramentaId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Ferramentas