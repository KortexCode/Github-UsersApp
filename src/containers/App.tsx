import { Searcher } from "@/components/Searcher";
import { Container } from "@mui/material";
import React from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e3f2fd',
    },
  },
});


function App(): JSX.Element{
  
    return (  
      <ThemeProvider theme={theme}>
        <Container sx={{
            width: "90%",
            height: "80vh",
            borderRadius:"8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#1c1e22",
        }} >
            <Searcher/>
        </Container>
      </ThemeProvider>
           
    )
}

export {App}