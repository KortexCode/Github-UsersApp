import { User } from '@/constants/app';
import { Stack, Typography } from '@mui/material';
import React from 'react';

type Props = {
	name: string;
	login: string;
	created_at: Date;
	bio: string;
};

//Componente
function UserDescription(props: Props): JSX.Element {
	const { name, login, created_at, bio } = props;
	const formatDate: string = new Date(created_at).toDateString();

	return (
		<div>
			<Stack
				direction={{ xs: 'column', md: 'row' }}
				justifyContent={{ sm: 'space-between' }}
			>
				<Typography
					sx={{
						color: '#7a7a7a',
						fontSize: '18px',
						fontWeight: '700',
					}}
					gutterBottom={true}
				>
					{name}
				</Typography>
				<Typography
					sx={{
						color: '#7a7a7a',
						fontSize: '18px',
					}}
					gutterBottom={true}
				>
					{formatDate}
				</Typography>
			</Stack>
			<Typography
				sx={{
					color: '#7a7a7a',
					fontSize: '16px',
				}}
				gutterBottom={true}
			>
				@{login}
			</Typography>
			<Typography sx={{ color: 'white' }}>
				{bio ??
					'Lorem ipsum, dolor. Autem illum delectus dolor earum in placeat labore, fugiat necessitatibus voluptatem nobis!'}
			</Typography>
		</div>
	);
}

export { UserDescription };
