import React from "react";
import { categoryList, ratingList } from "../../data";
import FilterListToggle from "../common/FilterListToggle";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CheckBox from "../common/CheckBox";
import SliderProton from "../common/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
  },
  wrapper: {
    padding: theme.spacing(1, 2, 1, 2),
  },
  title: {
    paddingTop: theme.spacing(1),
  },
}));

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cuisines,
  changeChecked,
  selectedPrice,
  changedPrice,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Category */}
      <div className={classes.wrapper}>
        <Typography variant="h6" className={classes.title}>
          Category
        </Typography>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>

      {/* Cuisine */}
      <div className={classes.wrapper}>
        <Typography variant="h6" className={classes.title}>
          Cuisine
        </Typography>
        {cuisines.map((cuisine) => (
          <CheckBox
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>

      {/* Price Range */}
      <div className={classes.wrapper}>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Price Range
        </Typography>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>

      {/* Star Rating */}
      <div className={classes.wrapper}>
        <Typography variant="h6" className={classes.title}>
          Star Rating
        </Typography>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
