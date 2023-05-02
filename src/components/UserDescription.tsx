import { User } from '@/constants/app';
import { Stack, Typography } from '@mui/material';
import React from 'react';

type Props = {
	name: string | undefined;
	login: string | undefined;
	created_at: Date | undefined;
	bio: string | undefined;
};

//Componente
function UserDescription(props: Props): JSX.Element {
	const { name, login, created_at, bio } = props;
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
					{created_at?.toString()}
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
