import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " center",
    height: `calc(100vh - 64px)`,
    width: "100%",
    background: "#fff",
    position: "relative",
  },
  img: {
    maxWidth: "500px",
    width: "100%",
    // objectFit: "cover",
  },
  title: {
    display: "inline-block",
    position: "absolute",
    left: "50%",
    top: "70%",
    transform: "translate(-50%,-50%)",
    marginTop: "1rem",
    textAlign: "center",
  },
});

const EmptyView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src="/images/gif/empty.gif" alt="Loading" className={classes.img} />
      <Typography className={classes.title}>No Item Found!</Typography>
    </div>
  );
};

export default EmptyView;
