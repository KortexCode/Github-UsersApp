import { UserDescription } from '@/components/UserDescription';
import { UserRepoInfo } from '@/components/UserRepoInfo';
import { User } from '@/constants/app';
import { CardMedia, Grid, Stack } from '@mui/material';
import React from 'react';

type Props = {
	githubUser: User | null;
};

function UserCardsContainer(props: Props) {
	const { githubUser } = props;

	return (
		<Grid
			container
			rowSpacing={2}
			columns={{ xs: 12, md: 12 }}
			sx={{
				background: 'white',
				mt: '16px',
			}}
		>
			<Grid item xs={12} md={4}>
				<Stack alignItems='center'>
					<CardMedia
						component='img'
						image={`${githubUser?.avatar_url}`}
						sx={{
							width: '150px',
							height: '150px',
							objectFit: 'cover',
							borderRadius: '100%',
						}}
					/>
				</Stack>
			</Grid>
			<Grid container item xs={12} md={8}>
				<Grid item xs={12}>
					<UserDescription
						name={githubUser?.name}
						created_at={githubUser?.created_at}
						login={githubUser?.login}
						bio={githubUser?.bio}
					/>
				</Grid>
				<Grid item xs={12}>
					<UserRepoInfo
					/* name={githubUser?.name}
						created_at={githubUser?.created_at}
						login={githubUser?.login}
						bio={githubUser?.bio} */
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export { UserCardsContainer };
