import { Button, Stack, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function Searcher():JSX.Element{
    
    return (
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{
            width: "90%",
            marginTop: "24px",       
        }}>
            <TextField id="Github User" type='text' label="Github User" variant="filled" InputProps={{
                endAdornment: (
                  <IconButton size='small'>
                    <SearchIcon sx={{
                      fontSize: "35px",
                      color: "#373d44"
                    }}/>
                  </IconButton>
                ),
                style:{
                  color: "white"
                },
              }} placeholder='Search user' size='small' color='primary' sx={{
                width: "400px",
                borderRadius: "8px",
              }}/>
        </Stack>
    )
}

export {
    Searcher
}