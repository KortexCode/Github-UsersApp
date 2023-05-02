import React from 'react';
import { Paper, Stack, Typography, colors } from '@mui/material';

type Props = {
	followers: number | undefined;
	following: number | undefined;
	public_repos: number | undefined;
};

function UserRepoInfo(props: Props): JSX.Element {
	const { followers, following, public_repos } = props;
	return (
		<Paper
			sx={{
				backgroundColor: '#24292F',
			}}
		>
			<Stack
				direction='row'
				useFlexGap={true}
				flexWrap='wrap'
				rowGap={{ xs: 1, sm: 0 }}
				columnGap={{ xs: 1 }}
				justifyContent={{
					xs: 'center',
					sm: 'space-evenly',
				}}
				alignItems='center'
				sx={{
					height: 'auto',
					padding: '12px',
				}}
			>
				<Stack
					alignSelf='center'
					direction='column'
					sx={{
						width: '110px',
					}}
				>
					<Typography
						align='center'
						sx={{
							color: '#7a7a7a',
							fontSize: '18px',
							fontWeight: '600',
						}}
					>
						Followers
					</Typography>
					<Typography
						sx={{
							color: 'white',
							fontSize: '16px',
						}}
						align='center'
					>
						{followers}
					</Typography>
				</Stack>
				<Stack
					direction='column'
					sx={{
						width: '110px',
					}}
				>
					<Typography
						align='center'
						sx={{
							color: '#7a7a7a',
							fontSize: '18px',
							fontWeight: '600',
						}}
					>
						Following
					</Typography>
					<Typography
						sx={{
							color: 'white',
							fontSize: '16px',
						}}
						align='center'
					>
						{following}
					</Typography>
				</Stack>
				<Stack
					direction='column'
					sx={{
						width: '110px',
					}}
				>
					<Typography
						align='center'
						sx={{
							color: '#7a7a7a',
							fontSize: '18px',
							fontWeight: '600',
						}}
					>
						Public Repos
					</Typography>
					<Typography
						sx={{
							color: 'white',
							fontSize: '16px',
						}}
						align='center'
					>
						{public_repos}
					</Typography>
				</Stack>
			</Stack>
		</Paper>
	);
}

export { UserRepoInfo };
