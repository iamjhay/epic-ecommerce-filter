import { Grid } from "@material-ui/core";
import React from "react";
import ListItem from "./ListItem";

const ListPanel = ({ list }) => {
  return (
    <>
      <Grid container spacing={3}>
        {list.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ListItem item={item}></ListItem>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ListPanel;
