import { Searcher } from "@/components/Searcher";
import { Container } from "@mui/material";
import React from "react";




function App(): JSX.Element{
  
    return (  
      
        <Container sx={{
            width: "90%",
            height: "80vh",
            background: "#1c1e22",
        }} >
            <Searcher/>
        </Container>
           
    )
}

export {App}