import { Searcher } from "@/components/Searcher";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { githubUserQuery } from "@/services/http.query.service";

type SearchText = string;

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});


function App(): JSX.Element{

  const [githubUser, setGithubUser] = useState();
  const [inputSearch, setInputSearch] = useState<SearchText>("octocat");

  useEffect(()=>{
    (async function(){
      const userData = await githubUserQuery(inputSearch);
      console.log(userData);
    }
    )()
  
  }, [inputSearch])
  
  return (  
    <ThemeProvider theme={theme}>
      <Container sx={{
          width: "80%",
          height: "80vh",
          borderRadius:"8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#1c1e22",
      }} >
          <Searcher setInputSearch={setInputSearch} />
      </Container>
    </ThemeProvider>
         
  )
}

export {App}