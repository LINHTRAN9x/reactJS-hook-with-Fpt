import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

import Grid from "@mui/material/Grid";

export default function Cards({
  name,
  price,
  option1,
  option2,
  option3,
  size,
  isActive,
}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "1.3em",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 0px 0px 2px #333 inset",
          },
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              ${price}
            </span>
            /month
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".7em",
              textAlign: "start",
              marginBottom: "10px",
            }}
          >
            <Typography
              sx={{
                border: "2px solid ",
                borderColor: "divider",
                padding: ".5em .8em",
                transition: "transform 0.3s ease-in-out",
                opacity: isActive === "option1" ? 0.5 : 1,
                "&:hover": {
                  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.4) inset",
                },
              }}
            >
              {isActive === "option1" ? <ClearIcon /> : <CheckIcon />}
              {option1}
            </Typography>
            <Typography
              sx={{
                borderLeft: "2px solid ",
                borderRight: "2px solid ",
                borderBottom: "2px solid ",
                borderColor: "divider",
                padding: ".5em .8em",
                opacity: isActive === "option2" ? 0.5 : 1,
              }}
            >
              {isActive === "option2" ? <ClearIcon /> : <CheckIcon />}
              {option2}
            </Typography>
            <Typography
              sx={{
                borderLeft: "2px solid ",
                borderRight: "2px solid ",
                borderBottom: "2px solid ",
                borderColor: "divider",
                padding: ".5em .8em",
                opacity: isActive === "option3" ? 0.5 : 1,
              }}
            >
              {isActive === "option3" ? <ClearIcon /> : <CheckIcon />}
              {option3}
            </Typography>
          </Typography>
          <Typography sx={{ pb: 2 }}>{size}</Typography>
          <Typography paragraph>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            margin: "0 auto",
          }}
        >
          <Button variant="outlined">Select</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
