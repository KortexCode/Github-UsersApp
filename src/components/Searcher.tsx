import { Button, Stack, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function Searcher():JSX.Element{

    return (
        <Stack direction="row">
            <SearchIcon/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <IconButton></IconButton>
        </Stack>
    )
}

export {
    Searcher
}