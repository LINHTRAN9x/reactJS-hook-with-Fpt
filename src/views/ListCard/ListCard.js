import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Cards from "./Card";

const cards = [
  {
    name: "Basic",
    price: 8,
    option1: "Feature 1",
    option2: "Feature 2",
    option3: "Feature 3",
    size: "Individual",
    isActive: "option3",
  },
  {
    name: "Standard",
    price: 20,
    option1: "Feature A",
    option2: "Feature B",
    option3: "Feature C",
    size: "Small Business",
    isActive: "option3",
  },
  {
    name: "Premium",
    price: 40,
    option1: "Feature X",
    option2: "Feature Y",
    option3: "Feature Z",
    size: "Large Company",
    isActive: "option2",
  },
];

const themeUITheme = createTheme({
  palette: {
    background: {
      default: "#E0C3FC",
    },
  },
  typography: {
    fontFamily: "system-ui, sans-serif",
  },
  colors: {
    text: "#000",
    primary: "#33e",
  },
});

export default function Album() {
  return (
    <ThemeProvider theme={themeUITheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Header
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Cards
                name={card.name}
                price={card.price}
                option1={card.option1}
                option2={card.option2}
                option3={card.option3}
                size={card.size}
                isActive={card.isActive}
              />
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
