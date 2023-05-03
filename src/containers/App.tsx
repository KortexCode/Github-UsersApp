import { Searcher } from '@/components/Searcher';
import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { User } from '@/constants/app';
import { UserCardsContainer } from './UserCardsContainer';

type SearchText = string;
type Error = boolean;
//Usuario inicial
const UserInitial = {
	login: '',
	id: 0,
	node_id: '',
	avatar_url: '',
	gravatar_id: '',
	url: '',
	html_url: '',
	followers_url: '',
	following_url: '',
	gists_url: '',
	starred_url: '',
	subscriptions_url: '',
	organizations_url: '',
	repos_url: '',
	events_url: '',
	received_events_url: '',
	type: '',
	site_admin: false,
	name: '',
	company: '',
	blog: '',
	location: '',
	email: '',
	hireable: '',
	bio: '',
	twitter_username: '',
	public_repos: 0,
	public_gists: 0,
	followers: 0,
	following: 0,
	created_at: new Date(),
	updated_at: new Date(),
};
//Tema personalizado
const theme = createTheme({
	palette: {
		primary: {
			main: '#FFFFFF',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 400,
			md: 600,
			lg: 900,
			xl: 1536,
		},
	},
});

function App(): JSX.Element {
	//Estados del componente
	const [githubUser, setGithubUser] = useState<User>(UserInitial);
	const [inputSearch, setInputSearch] = useState<SearchText>('octocat');
	const [searhError, setSearchError] = useState<Error>(false);
	//Se realiza la consulta a la Api y se actualizan los estos
	useEffect(() => {
		async function githubUserQuery(user: string): Promise<void> {
			const response = await fetch(`https://api.github.com/users/${user}`, {
				method: 'get',
			});
			if (response.status === 404) {
				setInputSearch('octocat');
				setSearchError(true);
				return;
			} else {
				const data: User = await response.json();
				setGithubUser(data);
			}
		}
		githubUserQuery(inputSearch);
	}, [inputSearch]);

	return (
		<ThemeProvider theme={theme}>
			<Container
				sx={{
					width: '80%',
					height: 'auto',
					paddingBottom: '24px',
					borderRadius: '8px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					background: '#1c1e22',
				}}
			>
				<Typography
					variant='h3'
					textAlign='center'
					gutterBottom={true}
					sx={{
						paddingTop: '12px',
						fontWeight: 700,
						color: 'rgba(255, 255, 255, 0.7)',
					}}
				>
					GitHub User App
				</Typography>
				<Searcher
					setInputSearch={setInputSearch}
					searchError={searhError}
					setSearchError={setSearchError}
				/>
				<UserCardsContainer githubUser={githubUser} />
			</Container>
		</ThemeProvider>
	);
}

export { App };
