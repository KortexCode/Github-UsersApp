import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import { Grid, Stack, Typography, colors } from '@mui/material';

type Props = {
	location: string | undefined;
	twitter_username: string | undefined;
	company: string | undefined;
	blog: string | undefined;
};

function UserContactInfo(props: Props): JSX.Element {
	const { location, twitter_username, company, blog } = props;

	return (
		<>
			<Grid item xs={12} sm={6}>
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
						{location}
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Stack direction='row' columnGap={2}>
					<TwitterIcon
						sx={{
							color: '#1D9BF0',
						}}
					/>
					{twitter_username !== null ? (
						<Typography
							sx={{
								color: 'white',
								fontSize: '16px',
							}}
						>
							{twitter_username}
						</Typography>
					) : (
						<Typography>Not Available</Typography>
					)}
				</Stack>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Stack direction='row' columnGap={2}>
					<LanguageIcon sx={{ color: '#0ba52d' }} />
					{blog !== null ? (
						<Typography
							sx={{
								color: 'white',
								fontSize: '16px',
							}}
						>
							{blog}
						</Typography>
					) : (
						<Typography>Not Available</Typography>
					)}
				</Stack>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Stack direction='row' columnGap={2}>
					<BusinessIcon
						sx={{
							color: '#871689',
						}}
					/>
					{company !== null ? (
						<Typography
							sx={{
								color: 'white',
								fontSize: '16px',
							}}
						>
							{company}
						</Typography>
					) : (
						<Typography>Not Available</Typography>
					)}
				</Stack>
			</Grid>
		</>
	);
}

export { UserContactInfo };
