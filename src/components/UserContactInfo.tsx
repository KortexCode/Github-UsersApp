import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import { Grid, Stack, Typography } from '@mui/material';

type Props = {
	location: string;
	twitter_username: string;
	company: string;
	blog: string;
};

function UserContactInfo(props: Props): JSX.Element {
	const { location, twitter_username, company, blog } = props;
	//Elemento blog dependiendo de si vinene vacío.
	const blogTag: JSX.Element =
		blog === '' ? (
			<Typography
				sx={{
					color: 'white',
				}}
			>
				{'Not Available'}
			</Typography>
		) : (
			<a
				style={{
					color: 'rgba(255, 255, 255, 0.7)',
				}}
				target='_blank'
				href={blog}
				rel='noopener noreferrer'
			>
				<Typography>{blog}</Typography>
			</a>
		);
	return (
		<>
			<Grid item xs={12} md={6}>
				<Stack direction='row' columnGap={2}>
					<LocationOnIcon
						sx={{
							color: '#bf1818',
						}}
					/>
					<Typography
						sx={{
							color: 'white',
							fontSize: '16px',
						}}
					>
						{location ?? 'Not Available'}
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={12} md={6}>
				<Stack direction='row' columnGap={2}>
					<TwitterIcon
						sx={{
							color: '#1D9BF0',
						}}
					/>
					<Typography
						sx={{
							color: 'white',
							fontSize: '16px',
						}}
					>
						{twitter_username ?? 'Not Available'}
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={12} md={6}>
				<Stack direction='row' columnGap={2}>
					<LanguageIcon sx={{ color: '#0ba52d' }} />
					{blogTag}
				</Stack>
			</Grid>
			<Grid item xs={12} md={6}>
				<Stack direction='row' columnGap={2}>
					<BusinessIcon
						sx={{
							color: '#871689',
						}}
					/>
					<Typography
						sx={{
							color: 'white',
							fontSize: '16px',
						}}
					>
						{company ?? 'Not Available'}
					</Typography>
				</Stack>
			</Grid>
		</>
	);
}

export { UserContactInfo };
