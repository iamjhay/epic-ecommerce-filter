import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    fontFamily: `'Raleway", sans-serif`,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.5rem",
    fontSize: "0.8rem",
  },
  rating: {
    backgroundColor: "#eeeeee",
    padding: "0.5rem",
    borderRadius: "10px",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
  },
  delivery: {
    marginLeft: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.26)",
  },
}));

const ListItem = ({ item }) => {
  const { title, serviceTime, deliveryFee, rating, price, coverSrc } = item;

  const classes = useStyles();
  return (
    <Card className={classes.root} id="card" elevation={2}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={coverSrc}
          title={title}
        />
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h6">{title}</Typography>
            <span className={classes.rating}>🌟 {rating}</span>
          </div>
          <div className={classes.footer}>
            <div className={classes.subtitle}>
              <Typography variant="body2" fontWeight="fontWeightBold">
                {serviceTime}
              </Typography>
              <Typography variant="body2" className={classes.delivery}>
                Delivery Fee ${deliveryFee}
              </Typography>
            </div>
            <Typography variant="body2" fontWeight="fontWeightBold">
              ${price}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ListItem;

// id: 1,
//     title: "lounge resort",
//     serviceTime: "45-60min",
//     deliveryFee: 3.44,
//     category: "place",
//     cuisine: "american",
//     rating: 5,
//     price: 2500,
//     coverSrc: "/images/places/ameri.jpg",
