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
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent={{ sm: 'space-between' }} /* alignItems='center' */
			>
				<Typography gutterBottom={true}>{name}</Typography>
				<Typography gutterBottom={true}>{created_at?.toString()}</Typography>
			</Stack>
			<Typography gutterBottom={true}>@{login}</Typography>
			<Typography>
				{bio ??
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem illum delectus dolor earum in placeat labore, recusandae nulla aspernatur fugiat necessitatibus voluptatem nobis!'}
			</Typography>
		</div>
	);
}

export { UserDescription };
