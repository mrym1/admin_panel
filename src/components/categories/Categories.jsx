import React from "react";
import "./categories.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { categories } from "../../categories";

const Categories = () => {
  const All_Categories = categories.map((categorie) => {
    return (
      <Card
        sx={{ maxWidth: 250, m: 4, borderRadius: 5 }}
        className="allcategories"
      >
        <CardActionArea>
          <CardMedia
            style={{ backgroundColor: "black" }}
            component="img"
            width="250"
            height="180"
            image={categorie.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="typography"
            >
              {categorie.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
  return (
    <div className="categories">
      {/* <div className="buttons">
        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button variant="contained" size="medium">
              Add User Categories
            </Button>
            <Button variant="contained" size="medium">
              Download
            </Button>
          </div>
        </Box>
      </div> */}
      <div className="searchCategories">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            size="small"
            label="Search by Categories name"
            variant="outlined"
          />
        </Box>
        <Box sx={{ "& button": { m: 2 } }}>
          <Button variant="contained" size="medium">
            Apply
          </Button>
        </Box>
      </div>
      <div className="allcategories455">{All_Categories}</div>
    </div>
  );
};

export default Categories;
