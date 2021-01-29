import React, { useState } from "react";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "none",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  articleTitle: {
    fontWeight: "700",
  },
  paper: {
    margin: "20px",
    width: "160px",
    height: "140px",
    padding: "20px",
    background: "#e6ffee",
    borderRadius: "10px",
    flexDirection: "row",
  },
  articleCard: {
    flex: "1 0 auto",
    display: "flex",
    padding: "10px",
  },
  AppBar: {
    background: "#009933",
  },
  button: {
    color: "white",
    background: "#00802b",
    borderRadius: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    padding: "6px",
    borderWidth: "2px",
    borderColor: "white",
  },
}));

const ArticleList = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({ filterList: props.data });
  const creatArticleBox = (article, index) => {
    return (
      <Card className={classes.paper} item key={index}>
        <div className={classes.articleCard}>
          <Typography className={classes.articleTitle}> Article : </Typography>
          <Typography> {article.title}</Typography>
        </div>
        <div className={classes.articleCard}>
          <Typography className={classes.articleTitle}> Date : </Typography>
          <Typography variant="body1">
            {new Date(article.date).toLocaleDateString()}
          </Typography>
        </div>
        <div className={classes.articleCard}>
          <Typography className={classes.articleTitle}> Up Votes : </Typography>
          <Typography> {article.upVotes}</Typography>
        </div>
      </Card>
    );
  };
  const filterByDate = () => {
    let list = state.filterList.sort(function (a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    setState((prevState) => ({
      ...prevState,
      filterdList: list,
    }));
    return list;
  };
  const filterByUpvoted = () => {
    let list = state.filterList.sort(
      (a, b) => parseFloat(b.upVotes) - parseFloat(a.upVotes)
    );
    setState((prevState) => ({
      ...prevState,
      filterdList: list,
    }));
    return list;
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          <ListAltIcon fontSize="large" />
          <Typography className={classes.title} variant="h4" noWrap>
            Article List
          </Typography>
          <div>
            <Button onClick={() => filterByUpvoted()}>
              <Typography className={classes.button} variant="button" noWrap>
                Most UpVotes
              </Typography>
            </Button>

            <Button onClick={() => filterByDate()}>
              <Typography className={classes.button} variant="button" noWrap>
                Most Recent
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {state.filterList.map((article, index) => {
              return creatArticleBox(article, index);
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default ArticleList;
