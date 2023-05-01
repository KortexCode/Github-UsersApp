import { User } from '@/constants/app'
import { Grid, Stack } from '@mui/material';
import React from 'react'

type Props = {
    githubUser: User | null;
}

function UserCardsContainer(props: Props) {

    const { githubUser } = props;

    return (
      <Grid container spacing={1} sx={{
        background: "white",
        mt: "16px",
      }}>
        <Grid item xs={12}>
            <Stack>hola chikorita</Stack>
        </Grid>
      </Grid>
    )
}

export {
    UserCardsContainer
}
