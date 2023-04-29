import { Button, Stack, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function Searcher():JSX.Element{
    
    return (
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{
            marginTop: "24px",
        }}>
            <TextField id="outlined-basic" label="Github User" variant="outlined" InputProps={{
                endAdornment: (
                  <IconButton size="small">
                    <SearchIcon/>
                  </IconButton>
                )
              }} placeholder='Search user' size='small' color='primary' sx={{
                borderRadius: "8px",
                color: "white",
              }}/>
        </Stack>
    )
}

export {
    Searcher
}