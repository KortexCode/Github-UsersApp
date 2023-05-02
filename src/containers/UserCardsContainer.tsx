import { UserContactInfo } from '@/components/UserContactInfo';
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
			rowGap={3}
			columns={{ xs: 12, lg: 12 }}
			sx={{
				mt: '28px',
			}}
		>
			<Grid item xs={12} lg={4} alignSelf='center'>
				<Stack alignItems='center'>
					<CardMedia
						component='img'
						image={`${githubUser?.avatar_url}`}
						sx={{
							width: '180px',
							height: '180px',
							objectFit: 'cover',
							borderRadius: '100%',
						}}
					/>
				</Stack>
			</Grid>
			<Grid container rowSpacing={3} item xs={12} lg={8}>
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
						followers={githubUser?.followers}
						following={githubUser?.following}
						public_repos={githubUser?.public_repos}
					/>
				</Grid>
				<Grid container rowSpacing={2} item xs={12}>
					<UserContactInfo
						location={githubUser?.location}
						twitter_username={githubUser?.twitter_username}
						company={githubUser?.company}
						blog={githubUser?.blog}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export { UserCardsContainer };
