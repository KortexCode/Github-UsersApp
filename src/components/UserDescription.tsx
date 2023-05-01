import { User } from '@/constants/app';
import { Stack, Typography } from '@mui/material';
import React from 'react';

type Props = {
	name: string | undefined;
	login: string | undefined;
	created_at: Date | undefined;
	bio: string | undefined;
};

type Git = {
	github: User | null;
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
				<Typography>{name} </Typography>
				<p>{created_at?.toString()}</p>
			</Stack>
			<Typography>@{login}</Typography>
			<Typography>{bio}</Typography>
		</div>
	);
}

export { UserDescription };
